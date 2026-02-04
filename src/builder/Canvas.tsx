import React, { useState } from 'react';
import type { BuilderComponent } from './types';
import './Canvas.css';

interface CanvasProps {
  components: BuilderComponent[];
  selectedId: string | null;
  onSelectComponent: (id: string) => void;
  onUpdateComponent: (id: string, updates: Partial<BuilderComponent>) => void;
  onDeleteComponent: (id: string) => void;
  onDrop: (e: React.DragEvent) => void;
}

const Canvas: React.FC<CanvasProps> = ({
  components,
  selectedId,
  onSelectComponent,
  onUpdateComponent,
  onDeleteComponent,
  onDrop,
}) => {
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const renderComponent = (component: BuilderComponent) => {
    const isSelected = component.id === selectedId;
    const isDragOver = component.id === dragOverId;

    const handleDragStart = (e: React.DragEvent) => {
      e.dataTransfer.setData('componentId', component.id);
      e.stopPropagation();
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOverId(component.id);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.stopPropagation();
      if (e.currentTarget === e.target) {
        setDragOverId(null);
      }
    };

    const commonProps = {
      className: `canvas-component ${component.type} ${isSelected ? 'selected' : ''} ${isDragOver ? 'drag-over' : ''}`,
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        onSelectComponent(component.id);
      },
      draggable: true,
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      style: component.style,
    };

    let content;
    switch (component.type) {
      case 'heading':
        content = (
          <h2 {...commonProps} contentEditable suppressContentEditableWarning onBlur={(e) => 
            onUpdateComponent(component.id, { content: e.currentTarget.textContent || '' })
          }>
            {component.content || 'Heading Text'}
          </h2>
        );
        break;
      case 'text':
        content = (
          <p {...commonProps} contentEditable suppressContentEditableWarning onBlur={(e) => 
            onUpdateComponent(component.id, { content: e.currentTarget.textContent || '' })
          }>
            {component.content || 'Click to edit this text. You can add any content here.'}
          </p>
        );
        break;
      case 'button':
        content = (
          <button {...commonProps} contentEditable suppressContentEditableWarning onBlur={(e) => 
            onUpdateComponent(component.id, { content: e.currentTarget.textContent || '' })
          }>
            {component.content || 'Click Me'}
          </button>
        );
        break;
      case 'image':
        content = (
          <div {...commonProps}>
            <div className="image-placeholder">
              🖼️ Image Placeholder
              <span className="image-note">Click to customize in properties panel</span>
            </div>
          </div>
        );
        break;
      case 'container':
        content = (
          <div {...commonProps}>
            <div className="container-label">Container</div>
            {component.children && component.children.length > 0 ? (
              component.children.map(child => (
                <div key={child.id}>{renderComponent(child)}</div>
              ))
            ) : (
              <div className="container-empty">Drop components here</div>
            )}
          </div>
        );
        break;
      case 'spacer':
        content = (
          <div {...commonProps}>
            <div className="spacer-visual">
              <span>⬍⬍⬍ Spacer ⬍⬍⬍</span>
            </div>
          </div>
        );
        break;
      default:
        content = <div {...commonProps}>Unknown Component</div>;
    }

    return (
      <div key={component.id} className="component-wrapper">
        {content}
        {isSelected && (
          <div className="component-actions">
            <button
              className="action-btn delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteComponent(component.id);
              }}
              title="Delete"
            >
              🗑️
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      className="canvas"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => onSelectComponent('')}
    >
      <div className="canvas-toolbar">
        <div className="canvas-title">
          <span className="canvas-icon">🎨</span>
          Live Canvas
        </div>
        <div className="canvas-hint">Click components to edit • Drag to reorder</div>
      </div>
      
      <div className="canvas-content">
        {components.length === 0 ? (
          <div className="canvas-empty">
            <div className="empty-icon">✨</div>
            <h3>Start Building Your Website</h3>
            <p>Click or drag components from the left panel to add them here</p>
          </div>
        ) : (
          components.map(component => renderComponent(component))
        )}
      </div>
    </div>
  );
};

export default Canvas;
