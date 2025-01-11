import { Grid } from '@mui/material';
import DonorsListings from 'components/admin/donors/DonorsList';

const Donors = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <DonorsListings />
      </Grid>
    </Grid>
  );
};

export default Donors;
