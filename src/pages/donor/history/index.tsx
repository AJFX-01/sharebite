import { Grid } from '@mui/material';
import DonationHistory from 'components/donor/DonationHistory';

const History = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <DonationHistory />
      </Grid>
    </Grid>
  );
};

export default History;
