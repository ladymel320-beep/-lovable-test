import React from 'react';
import './ComponentLibrary.css';

interface ComponentLibraryProps {
  onAddComponent: (type: string) => void;
}

const ComponentLibrary: React.FC<ComponentLibraryProps> = ({ onAddComponent }) => {
  const components = [
    { type: 'heading', icon: '📝', name: 'Heading', description: 'Large title text' },
    { type: 'text', icon: '📄', name: 'Text', description: 'Paragraph text' },
    { type: 'button', icon: '🔘', name: 'Button', description: 'Call-to-action button' },
    { type: 'image', icon: '🖼️', name: 'Image', description: 'Image placeholder' },
    { type: 'container', icon: '📦', name: 'Container', description: 'Section container' },
    { type: 'spacer', icon: '📏', name: 'Spacer', description: 'Add spacing' },
  ];

  return (
    <div className="component-library">
      <div className="library-header">
        <h3>Components</h3>
        <p>Drag or click to add</p>
      </div>
      <div className="component-list">
        {components.map((component) => (
          <div
            key={component.type}
            className="component-item"
            onClick={() => onAddComponent(component.type)}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('componentType', component.type);
            }}
          >
            <div className="component-icon">{component.icon}</div>
            <div className="component-info">
              <div className="component-name">{component.name}</div>
              <div className="component-desc">{component.description}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="library-tip">
        <div className="tip-icon">💡</div>
        <div className="tip-text">
          Click components to add them to your page. Drag to reorder.
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
