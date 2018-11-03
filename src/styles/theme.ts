import { Theme as RebassTheme } from 'rebass';

export interface ThemeInterface extends RebassTheme {
  breakpoints: string[];
  fontSizes: string[];
  colors: {
    [name: string]: string;
    primary: string;
  };
  space: string[];
  fonts: {};
  fontWeights: number[];
  lineHeights: number[];
  letterSpacings: number[];
  shadows: {};
  borders: {};
  radii: string[];
  opacity: number[];
}

const theme: ThemeInterface = {
  breakpoints: ['768px', '960px'],
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
  ],
  colors: {
    primary: '#E75B41',
  },
  space: [
    '0.125em',
    '0.25em',
    '0.5em',
    '1em',
    '2em',
    '5em',
  ],
  fonts: {},
  fontWeights: [300, 400, 500, 600, 700],
  lineHeights: [],
  letterSpacings: [],
  shadows: {
    box: '0px 1px 1px 1px rgba(0, 0, 0, 0.15',
  },
  borders: {},
  radii: [],
  opacity: [],
};

export default theme;
