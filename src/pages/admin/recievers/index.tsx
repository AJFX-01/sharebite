import { Grid } from '@mui/material';
import ReceiversListings from 'components/admin/recievers/RecieversList';

const Recievers = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <ReceiversListings />
      </Grid>
    </Grid>
  );
};

export default Recievers;
