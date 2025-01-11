import { Grid } from '@mui/material';
import SiteListings from 'components/admin/droffsite/SiteList';

const DroffSites = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <SiteListings />
      </Grid>
    </Grid>
  );
};

export default DroffSites;
