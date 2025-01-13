import { Grid, Typography } from '@mui/material';

const History = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <Typography>History</Typography>
      </Grid>
    </Grid>
  );
};

export default History;
