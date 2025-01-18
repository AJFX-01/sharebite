import { Grid } from '@mui/material';
import DonationDetails from 'components/donor/DonationInsight';
import DonationList from 'components/donor/DonationList';

const Donor = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      {/* <Grid item xs={12}>
        <DonationDetails />
      </Grid> */}
      <Grid item xs={12}>
        <DonationList />
      </Grid>
    </Grid>
  );
};

export default Donor;
