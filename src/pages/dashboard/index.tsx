import { Grid } from '@mui/material';
import DonationDetails from 'components/admin/dashboard/DonationDetails';

const Dashboard = () => {
  return (
    <Grid container mb={3}>
      {/* ------------- Card section ---------------- */}
      <Grid item xs={12} zIndex={1}>
        <DonationDetails />
      </Grid>
      <Grid item xs={12}>
        {/* <RecentTransactions /> */}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
