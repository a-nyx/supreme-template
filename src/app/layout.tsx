'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

import store, { useAppSelector } from '@store';
import { lightTheme, darkTheme } from '@theme';
import Header from '@/components/Header/Header';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <RootWithRedux>{children}</RootWithRedux>
    </Provider>
  );
};

const RootWithRedux = ({ children }: { children: ReactNode }) => {
  const { theme } = useAppSelector((state) => state.client);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <html lang="en">
        <head>
          <title>Supreme Template</title>
        </head>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
