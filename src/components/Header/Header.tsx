import AppBar from '@mui/material/AppBar';
import useTheme from '@mui/material/styles/useTheme';

import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        p: '0.5rem 1rem',
        backgroundColor: theme.palette.header.bg,
        color: theme.palette.header.text,
      }}
    >
      <Logo />
      <ThemeSwitcher />
    </AppBar>
  );
};

export default Header;
