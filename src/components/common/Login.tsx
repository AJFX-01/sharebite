import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useFormValidation } from 'hooks/useFormValidation';
import AuthSchemas from 'schema/auth';

const LoginForm = () => {
  const { up } = useBreakpoints();
  const upSM = up('sm');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const { errors, validate } = useFormValidation(AuthSchemas.loginSchema);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    // console.log('Login:', { email, password });
    // For demo purposes, navigate to donor dashboard
    // navigate('/donor');
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 2.5 }}>
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
      </Grid>
      <Grid container justifyContent="flex-end" sx={{ my: 3 }}>
        <Grid item>
          <Link href="/forget-password" variant="subtitle2" underline="hover">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
      <Button
        fullWidth
        size={upSM ? 'large' : 'medium'}
        type="submit"
        variant="contained"
        sx={{
          fontSize: 12,
        }}
        color="primary"
        onClick={handleSubmit}
      >
        Login
        {/* {loading ? 'Loading...' : 'Login'} */}
      </Button>
    </>
  );
};

export default LoginForm;
