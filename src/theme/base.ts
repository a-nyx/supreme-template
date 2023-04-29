import { ThemeOptions } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const themeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#fff',
          },
        },
      },
    },
  },
};

export default themeOptions;
