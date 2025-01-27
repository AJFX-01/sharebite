import { Grid } from '@mui/material';
import RecieptList from 'components/reciever/ReceiptList';

const Reciept = () => {
  return (
    <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
      {/* ------------- Data-Grid section ---------------- */}
      <Grid item xs={12}>
        <RecieptList />
      </Grid>
    </Grid>
  );
};

export default Reciept;
