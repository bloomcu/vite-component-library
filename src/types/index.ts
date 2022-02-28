export type ButtonVariant = 'primary' | 'subtle' | 'accent' | 'disabled';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type GridGap = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '0';
export type ColNumber = 1 | 2 | 3 | 4 | 6 | 12

export interface Block {
  component?: any;
  uuid?: string;
}

export type Orientation = 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type Align = 'left' | 'center' | 'right';
export type Fullscreen = true | false;

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl';
export interface BlockConfig {
  headingLevel?: HeadingLevel;
  headingSize?: TextSize;
}

export interface FeatureV9Item {
  image: string;
  headerText: string;
  href?: string;
  action?: (...args: any) => any;
  buttonButtonVariant?: ButtonVariant;
  buttonText: string;
  description: string;
}

export interface Accordion {
  uuid: string
  label: string
  content: string
}
export interface Button {
  href?: string;
  target?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  text?: string;
  modal?: string;
  buttonClick?: (...args: any) => any;
}

export interface Link {
  href?: string;
  target?: string;
  text?: string;
  block?: boolean;
}

export interface Child {
  title?: string;
  text?: string;
  links: Link[];
}

export interface Dropdown {
  component: string;
  children: Child[] | any;
}
export interface NavbarLink extends Link, Button {
  uuid: string;
  component: string;
  dropdown?: Dropdown;
  active?: boolean
}

export interface Image {
  src: string;
  alt?: string;
  class?: string;
  title: string;
  href?: string;
}

export interface Logo {
  link: Link;
  image: Image;
}
export interface ContentComponent {
  label: string;
  header: string;
  subHeader: string;
  button: Button;
  ctaLink: Link;
}

export interface Content {
  title?: string
  description?: string
  buttons?: Button[]
  image: Image
}

export interface BreakPointBlock {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}

export type BreakPoint = keyof BreakPointBlock;

export interface Video {
  src: string
  loop?: boolean
  autoplay?: boolean
  muted?: boolean
  playsInline?: boolean
}
