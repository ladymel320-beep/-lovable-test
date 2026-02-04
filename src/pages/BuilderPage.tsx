import React, { useState } from 'react';
import ComponentLibrary from '../builder/ComponentLibrary';
import Canvas from '../builder/Canvas';
import PropertyEditor from '../builder/PropertyEditor';
import type { BuilderComponent, ComponentStyle } from '../builder/types';
import './BuilderPage.css';

const BuilderPage: React.FC = () => {
  const [components, setComponents] = useState<BuilderComponent[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);

  const generateId = () => `component-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const createComponent = (type: string): BuilderComponent => {
    const baseComponent: BuilderComponent = {
      id: generateId(),
      type: type as any,
      style: {},
    };

    switch (type) {
      case 'heading':
        return { ...baseComponent, content: 'Heading Text', style: { fontSize: '32px', fontWeight: 'bold', padding: '1rem' } };
      case 'text':
        return { ...baseComponent, content: 'Click to edit this text. You can add any content here.', style: { fontSize: '16px', padding: '1rem' } };
      case 'button':
        return { ...baseComponent, content: 'Click Me', style: { padding: '0.75rem 2rem', backgroundColor: '#6366f1', color: '#ffffff', borderRadius: '8px' } };
      case 'image':
        return { ...baseComponent, style: { width: '100%', padding: '0' } };
      case 'container':
        return { ...baseComponent, children: [], style: { padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px' } };
      case 'spacer':
        return { ...baseComponent, style: { padding: '2rem' } };
      default:
        return baseComponent;
    }
  };

  const handleAddComponent = (type: string) => {
    const newComponent = createComponent(type);
    setComponents([...components, newComponent]);
    setSelectedId(newComponent.id);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    const componentId = e.dataTransfer.getData('componentId');

    if (componentType) {
      handleAddComponent(componentType);
    } else if (componentId) {
      // Reordering logic could go here
      console.log('Reordering component:', componentId);
    }
  };

  const handleUpdateComponent = (id: string, updates: Partial<BuilderComponent>) => {
    setComponents(components.map(c => 
      c.id === id ? { ...c, ...updates } : c
    ));
  };

  const handleUpdateStyle = (style: ComponentStyle) => {
    if (!selectedId) return;
    setComponents(components.map(c => 
      c.id === selectedId ? { ...c, style: { ...c.style, ...style } } : c
    ));
  };

  const handleUpdateContent = (content: string) => {
    if (!selectedId) return;
    setComponents(components.map(c => 
      c.id === selectedId ? { ...c, content } : c
    ));
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter(c => c.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all components?')) {
      setComponents([]);
      setSelectedId(null);
    }
  };

  const handleExport = () => {
    setShowExportModal(true);
  };

  const generateHTML = () => {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <style>
    body {
      margin: 0;
      padding: 20px;
      font-family: system-ui, -apple-system, sans-serif;
      background: #f3f4f6;
    }
    .container { max-width: 1200px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="container">
`;

    components.forEach(component => {
      const styleStr = component.style ? 
        Object.entries(component.style)
          .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
          .join('; ') : '';

      switch (component.type) {
        case 'heading':
          html += `    <h2 style="${styleStr}">${component.content || 'Heading'}</h2>\n`;
          break;
        case 'text':
          html += `    <p style="${styleStr}">${component.content || 'Text'}</p>\n`;
          break;
        case 'button':
          html += `    <button style="${styleStr}">${component.content || 'Button'}</button>\n`;
          break;
        case 'image':
          html += `    <div style="${styleStr}">
      <img src="https://via.placeholder.com/800x400" alt="Placeholder" style="width: 100%; height: auto;">
    </div>\n`;
          break;
        case 'container':
          html += `    <div style="${styleStr}">Container Content</div>\n`;
          break;
        case 'spacer':
          html += `    <div style="${styleStr}"></div>\n`;
          break;
      }
    });

    html += `  </div>
</body>
</html>`;

    return html;
  };

  const selectedComponent = components.find(c => c.id === selectedId) || null;

  return (
    <div className="builder-page">
      <div className="builder-header">
        <div className="builder-brand">
          <a href="/" className="brand-link">
            <span className="brand-icon">✨</span>
            <span className="brand-name">Website Builder Express</span>
          </a>
        </div>
        
        <div className="builder-actions">
          <button className="action-btn secondary" onClick={handleClear} disabled={components.length === 0}>
            🗑️ Clear
          </button>
          <button className="action-btn primary" onClick={handleExport} disabled={components.length === 0}>
            💾 Export HTML
          </button>
        </div>
      </div>

      <div className="builder-workspace">
        <ComponentLibrary onAddComponent={handleAddComponent} />
        <Canvas
          components={components}
          selectedId={selectedId}
          onSelectComponent={setSelectedId}
          onUpdateComponent={handleUpdateComponent}
          onDeleteComponent={handleDeleteComponent}
          onDrop={handleDrop}
        />
        <PropertyEditor
          component={selectedComponent}
          onUpdateStyle={handleUpdateStyle}
          onUpdateContent={handleUpdateContent}
        />
      </div>

      {showExportModal && (
        <div className="modal-overlay" onClick={() => setShowExportModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Export HTML</h2>
              <button className="modal-close" onClick={() => setShowExportModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <p>Copy the HTML code below and save it as an <code>.html</code> file:</p>
              <textarea
                className="export-code"
                value={generateHTML()}
                readOnly
                onClick={(e) => e.currentTarget.select()}
              />
              <div className="modal-actions">
                <button
                  className="action-btn primary"
                  onClick={() => {
                    navigator.clipboard.writeText(generateHTML());
                    alert('HTML copied to clipboard!');
                  }}
                >
                  📋 Copy to Clipboard
                </button>
                <button
                  className="action-btn secondary"
                  onClick={() => {
                    const blob = new Blob([generateHTML()], { type: 'text/html' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'my-website.html';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  ⬇️ Download HTML
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderPage;
