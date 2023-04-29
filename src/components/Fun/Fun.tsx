import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import {
  useAppSelector,
  useAppDispatch,
  fetchFun,
  funActions,
} from '@/store/store';

const Fun = () => {
  const dispatch = useAppDispatch();
  const fun = useAppSelector((state) => state.fun);

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: '5rem 0',
      }}
    >
      <Button
        endIcon={<TravelExploreIcon />}
        onClick={() => {
          dispatch(fetchFun());
        }}
        sx={{
          mr: '1rem',
        }}
      >
        I am bored!
      </Button>

      <Button
        endIcon={<DeleteSweepIcon />}
        disabled={!fun.data}
        onClick={() => {
          dispatch(funActions.reset(null));
        }}
      >
        Reset
      </Button>

      {fun.status !== 'initial' && (
        <Box sx={{ mt: '2rem' }}>
          <Typography>
            {fun.status === 'loading' && (
              <>
                <HourglassBottomIcon />
                <br /> Loading...
              </>
            )}

            {fun.status === 'success' && (
              <>
                <CelebrationIcon />
                <br />
                {fun.data!.activity}
              </>
            )}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Fun;
