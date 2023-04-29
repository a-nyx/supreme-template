import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import baseThemeOptions from './base';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',

    background: {
      default: '#CCE3DE',
    },

    text: {
      primary: '#000',
    },

    header: {
      bg: '#A4C3B2',
      text: '#000',

      logo: {
        bg: '#6B9080',
      },
    },

    intro: {
      cardBg: '#f7b267',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#590d22',
          textDecorationColor: '#590d22',
          '&:hover': {
            color: '#800f2f',
            textDecorationColor: '#800f2f',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#758bfd',
          ':hover': {
            backgroundColor: '#27187e',
          },
        },
      },
    },
  },
};

export default createTheme(baseThemeOptions, themeOptions);
