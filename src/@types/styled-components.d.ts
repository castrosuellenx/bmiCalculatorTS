/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import {ThemeType} from '../styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
