export interface ComponentStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  width?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
}

export interface BuilderComponent {
  id: string;
  type: 'text' | 'heading' | 'button' | 'image' | 'container' | 'spacer';
  content?: string;
  style?: ComponentStyle;
  children?: BuilderComponent[];
}

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  components: BuilderComponent[];
}
