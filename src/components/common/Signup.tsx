import { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { SigupFormData } from '../../types';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useFormValidation } from 'hooks/useFormValidation';
import AuthSchemas from 'schema/auth';
import IconifyIcon from 'components/base/IconifyIcon';

const SignupForm = () => {
  const { up } = useBreakpoints();
  const upSM = up('sm');
  const [formData, setFornData] = useState<SigupFormData>({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const { errors, validate } = useFormValidation(AuthSchemas.signupSchema);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFornData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    // console.log('Register:', { name, email, password });
    // For demo purposes, navigate to login page
    // navigate('/');
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 2.5 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="first_name"
            label="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.firstname}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="last_name"
            label="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.lastname}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="email"
            label="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.email}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.username}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            sx={{ size: { xs: 'small', sm: 'medium' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <IconifyIcon
                      icon={
                        showPassword ? 'majesticons:eye' : 'majesticons:eye-off'
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.password && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.password}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size={upSM ? 'medium' : 'small'}
            name="confirmPassword"
            label="Confirm Password"
            value={formData.confirmpassword}
            onChange={handleChange}
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    <IconifyIcon
                      icon={
                        showConfirmPassword
                          ? 'majesticons:eye'
                          : 'majesticons:eye-off'
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.confirmPassword && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.confirmPassword}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Button
        fullWidth
        size={upSM ? 'large' : 'medium'}
        sx={{
          fontSize: 12,
        }}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Sign Up
        {/* {loading ? 'Loading...' : 'Sign Up'} */}
      </Button>
    </>
  );
};

export default SignupForm;
