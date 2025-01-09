import { Card, Grid, Typography } from '@mui/material';
import LoginForm from 'components/common/Login';

const LoginPage = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
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
            Sign In
          </Typography>
          <LoginForm />
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* <Box
          component="img"
          src="../../../../public/blockchain.png"
          alt="Decentralized World"
          sx={{
            width: '100%', // Adjust based on your layout
            maxWidth: '60%', // Optional, to control max image size
          }}
        /> */}
        <Typography
          variant="h1"
          sx={{
            mt: 2,
            mb: { xs: 3, sm: 5 },
            fontSize: { xs: '2.5rem', sm: '3rem', md: '2rem' }, // Increase font size for different screen sizes
            width: '60%',
            wordBreak: 'break-word', // Allows breaking words to the next line
            overflowWrap: 'break-word', // Ensures long words are wrapped
            textAlign: 'center',
            paddingTop: 5,
            color: '#000',
          }}
        >
          Unlock the possibilities of a Decentralized World
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
