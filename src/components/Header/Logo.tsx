import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import useTheme from '@mui/material/styles/useTheme';

const Logo = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Avatar
      sx={{
        cursor: 'pointer',
        backgroundColor: theme.palette.header.logo.bg,
        color: 'inherit',
      }}
      onClick={() => router.push('/')}
    >
      ST
    </Avatar>
  );
};

export default Logo;
