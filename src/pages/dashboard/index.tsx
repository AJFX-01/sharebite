import { Grid, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container mb={3}>
      {/* ------------- Card section ---------------- */}
      <Grid item xs={12} zIndex={1}>
        {/* <MyCards /> */}
      </Grid>
      <Grid item xs={12}>
        {/* <RecentTransactions /> */}
        <Typography>Dashboard</Typography>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
