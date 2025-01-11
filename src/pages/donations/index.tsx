import { Grid, Typography } from '@mui/material';
import RecentListings from 'components/admin/donations/DonationListings';

const DonationListings = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <RecentListings />
      </Grid>
    </Grid>
  );
};

export default DonationListings;
