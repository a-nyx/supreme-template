/* eslint-disable no-unused-vars */
import { PaletteOptions } from '@mui/material';

import lightTheme from './light';
import darkTheme from './dark';

export { lightTheme, darkTheme };

/* MUI Theme Customization */
interface CustomPaletteOptions {
  header: {
    bg: string;
    text: string;

    logo: {
      bg: string;
    };
  };

  intro: {
    cardBg: string;
  };
}

declare module '@mui/material/styles' {
  interface PaletteOptions extends CustomPaletteOptions {}
  interface Palette extends CustomPaletteOptions {}
}
