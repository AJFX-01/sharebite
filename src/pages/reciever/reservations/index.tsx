import { Grid } from '@mui/material';
import ReserveDonations from 'components/reciever/Reservations';

const Reservations = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <ReserveDonations />
      </Grid>
    </Grid>
  );
};

export default Reservations;
