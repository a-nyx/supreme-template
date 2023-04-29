import IconButton from '@mui/material/IconButton';
import useTheme from '@mui/material/styles/useTheme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useAppDispatch, clientActions } from '@store';

const ThemeSwitcher = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => {
        dispatch(clientActions.enableDarkTheme(theme.palette.mode === 'light'));
      }}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeSwitcher;
