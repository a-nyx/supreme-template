import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import baseThemeOptions from './base';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',

    background: {
      default: '#778DA9',
    },

    text: {
      primary: '#fff',
    },

    header: {
      bg: '#1B263B',
      text: '#fff',

      logo: {
        bg: '#0D1B2A',
      },
    },

    intro: {
      cardBg: '#783f8e',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#57cc99',
          textDecorationColor: '#57cc99',
          '&:hover': {
            color: '#80ed99',
            textDecorationColor: '#80ed99',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000',
          backgroundColor: '#9ceaef',
          ':hover': {
            color: '#000',
            backgroundColor: '#68d8d6',
          },
        },
      },
    },
  },
};

export default createTheme(baseThemeOptions, themeOptions);
