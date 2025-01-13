import { Grid } from '@mui/material';
import AvailableDonations from 'components/reciever/AvaliableDonations';

const Reciever = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <AvailableDonations />
      </Grid>
    </Grid>
  );
};

export default Reciever;
