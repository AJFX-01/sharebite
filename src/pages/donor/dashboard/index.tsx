import { Grid } from '@mui/material';
import DonationList from 'components/donor/DonationList';

const Donor = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      <Grid item xs={12}>
        <DonationList />
      </Grid>
    </Grid>
  );
};

export default Donor;
