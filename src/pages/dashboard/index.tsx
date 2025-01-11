import { Grid } from '@mui/material';
import DonationDetails from 'components/admin/dashboard/DonationDetails';
import DonationPieChart from 'components/admin/dashboard/DonationPieChart';

const Dashboard = () => {
  return (
    <Grid container mb={3} spacing={{ xs: 2.5, sm: 3 }}>
      {/* ------------- Card section ---------------- */}
      <Grid item xs={12} zIndex={1}>
        <DonationDetails />
      </Grid>
      <Grid item xs={12}>
        <DonationPieChart />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
