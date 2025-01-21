import { Card, Grid, Typography } from '@mui/material';
// import ProfileForm from 'components/profile/Profile';

const Profile = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            p: { xs: 3, sm: 5 },
            width: { xs: '80%', sm: '60%', md: '80%' },
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mt: 2,
              mb: { xs: 3, sm: 5 },
              fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize' },
            }}
          >
            Profile Informations
          </Typography>
          {/* <ProfileForm /> */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
