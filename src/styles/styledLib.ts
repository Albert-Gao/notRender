import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import { ThemeInterface } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<
  ThemeInterface
>;

export {
  styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  prop,
  ifProp,
};
