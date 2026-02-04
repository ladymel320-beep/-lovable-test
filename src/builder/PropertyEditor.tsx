import React from 'react';
import type { BuilderComponent, ComponentStyle } from './types';
import './PropertyEditor.css';

interface PropertyEditorProps {
  component: BuilderComponent | null;
  onUpdateStyle: (style: ComponentStyle) => void;
  onUpdateContent: (content: string) => void;
}

const PropertyEditor: React.FC<PropertyEditorProps> = ({
  component,
  onUpdateStyle,
  onUpdateContent,
}) => {
  if (!component) {
    return (
      <div className="property-editor">
        <div className="editor-empty">
          <div className="empty-icon">👈</div>
          <h3>No Component Selected</h3>
          <p>Select a component from the canvas to edit its properties</p>
        </div>
      </div>
    );
  }

  const style = component.style || {};

  const handleStyleChange = (key: keyof ComponentStyle, value: string) => {
    onUpdateStyle({ ...style, [key]: value });
  };

  return (
    <div className="property-editor">
      <div className="editor-header">
        <h3>Properties</h3>
        <div className="component-type-badge">{component.type}</div>
      </div>

      <div className="editor-sections">
        {/* Content Section */}
        {(component.type === 'text' || component.type === 'heading' || component.type === 'button') && (
          <div className="editor-section">
            <div className="section-title">Content</div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                value={component.content || ''}
                onChange={(e) => onUpdateContent(e.target.value)}
                placeholder="Enter your text..."
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Text Styling */}
        <div className="editor-section">
          <div className="section-title">Text</div>
          
          <div className="form-group">
            <label>Font Size</label>
            <select
              value={style.fontSize || '16px'}
              onChange={(e) => handleStyleChange('fontSize', e.target.value)}
            >
              <option value="12px">Extra Small</option>
              <option value="14px">Small</option>
              <option value="16px">Medium</option>
              <option value="18px">Large</option>
              <option value="24px">Extra Large</option>
              <option value="32px">Huge</option>
              <option value="48px">Giant</option>
            </select>
          </div>

          <div className="form-group">
            <label>Font Weight</label>
            <select
              value={style.fontWeight || 'normal'}
              onChange={(e) => handleStyleChange('fontWeight', e.target.value)}
            >
              <option value="300">Light</option>
              <option value="normal">Normal</option>
              <option value="600">Semi Bold</option>
              <option value="bold">Bold</option>
              <option value="800">Extra Bold</option>
            </select>
          </div>

          <div className="form-group">
            <label>Text Align</label>
            <div className="button-group">
              <button
                className={style.textAlign === 'left' ? 'active' : ''}
                onClick={() => handleStyleChange('textAlign', 'left')}
              >
                ⬅️
              </button>
              <button
                className={style.textAlign === 'center' ? 'active' : ''}
                onClick={() => handleStyleChange('textAlign', 'center')}
              >
                ↔️
              </button>
              <button
                className={style.textAlign === 'right' ? 'active' : ''}
                onClick={() => handleStyleChange('textAlign', 'right')}
              >
                ➡️
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Text Color</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={style.color || '#000000'}
                onChange={(e) => handleStyleChange('color', e.target.value)}
              />
              <input
                type="text"
                value={style.color || '#000000'}
                onChange={(e) => handleStyleChange('color', e.target.value)}
                placeholder="#000000"
              />
            </div>
          </div>
        </div>

        {/* Background & Colors */}
        <div className="editor-section">
          <div className="section-title">Background</div>
          
          <div className="form-group">
            <label>Background Color</label>
            <div className="color-input-wrapper">
              <input
                type="color"
                value={style.backgroundColor || '#ffffff'}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
              />
              <input
                type="text"
                value={style.backgroundColor || '#ffffff'}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                placeholder="#ffffff"
              />
            </div>
          </div>

          <div className="color-presets">
            <div className="preset-label">Quick Colors:</div>
            <div className="preset-colors">
              {['#ffffff', '#f3f4f6', '#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#1f2937'].map(color => (
                <button
                  key={color}
                  className="color-preset"
                  style={{ backgroundColor: color }}
                  onClick={() => handleStyleChange('backgroundColor', color)}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="editor-section">
          <div className="section-title">Spacing</div>
          
          <div className="form-group">
            <label>Padding</label>
            <select
              value={style.padding || '1rem'}
              onChange={(e) => handleStyleChange('padding', e.target.value)}
            >
              <option value="0">None</option>
              <option value="0.5rem">Small</option>
              <option value="1rem">Medium</option>
              <option value="1.5rem">Large</option>
              <option value="2rem">Extra Large</option>
              <option value="3rem">Huge</option>
            </select>
          </div>

          <div className="form-group">
            <label>Margin</label>
            <select
              value={style.margin || '0'}
              onChange={(e) => handleStyleChange('margin', e.target.value)}
            >
              <option value="0">None</option>
              <option value="0.5rem">Small</option>
              <option value="1rem">Medium</option>
              <option value="1.5rem">Large</option>
              <option value="2rem">Extra Large</option>
            </select>
          </div>
        </div>

        {/* Size & Shape */}
        <div className="editor-section">
          <div className="section-title">Size & Shape</div>
          
          <div className="form-group">
            <label>Width</label>
            <select
              value={style.width || 'auto'}
              onChange={(e) => handleStyleChange('width', e.target.value)}
            >
              <option value="auto">Auto</option>
              <option value="50%">50%</option>
              <option value="75%">75%</option>
              <option value="100%">100%</option>
              <option value="200px">200px</option>
              <option value="400px">400px</option>
            </select>
          </div>

          <div className="form-group">
            <label>Border Radius</label>
            <select
              value={style.borderRadius || '8px'}
              onChange={(e) => handleStyleChange('borderRadius', e.target.value)}
            >
              <option value="0">None</option>
              <option value="4px">Small</option>
              <option value="8px">Medium</option>
              <option value="16px">Large</option>
              <option value="50px">Rounded</option>
              <option value="50%">Circle</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyEditor;
