import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

const Intro = () => {
  const theme = useTheme();

  const MyChip = styled(Chip)({
    fontSize: '1.5rem',
    width: '100%',
    backgroundColor: theme.palette.intro.cardBg,
  });

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: '5rem 0',
      }}
    >
      <Typography variant="h1">Supreme Template</Typography>
      <Grid
        container
        rowGap={2}
        sx={{
          p: {
            xs: '0 1rem',
            md: '0 2rem',
            lg: '0 3rem',
          },
          m: '2rem auto',
        }}
      >
        <Grid item xs={6} md={3}>
          <MyChip label="Next.js" />
        </Grid>
        <Grid item xs={6} md={3}>
          <MyChip label="TypeScript" />
        </Grid>
        <Grid item xs={6} md={3}>
          <MyChip label="MUI" />
        </Grid>
        <Grid item xs={6} md={3}>
          <MyChip label="Redux" />
        </Grid>
      </Grid>

      <Link
        component={NextLink}
        href="/fun"
        sx={{
          fontSize: '1.5rem',
        }}
      >
        go to fun page
      </Link>
    </Box>
  );
};

export default Intro;
