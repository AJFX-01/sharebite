import { ChangeEvent, useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useFormValidation } from 'hooks/useFormValidation';
import AuthSchemas from 'schema/auth';
import IconifyIcon from 'components/base/IconifyIcon';
import { useMutation } from '@tanstack/react-query';
import ApiRequests from 'api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import paths from 'router/path';

const SignupForm = () => {
  const { up } = useBreakpoints();
  const navigate = useNavigate();
  const upSM = up('sm');
  const [formData, setFornData] = useState<SignupFormData>({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: '',
    is_donor: '',
    is_receiver: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const { errors, validate } = useFormValidation(AuthSchemas.signupSchema);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent,
  ) => {
    const { name, value } = e.target;

    setFornData((prev: SignupFormData) => {
      if (name === 'role') {
        // Assuming the select field name is 'role'
        return {
          ...prev,
          role: value,
          is_donor: value === 'donor',
          is_receiver: value === 'reciever',
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const signupMutation = useMutation({
    mutationFn: ApiRequests.registerUser,
    onSuccess(data) {
      toast.success('Login successful!', { id: 'asyntoast' });
      console.log(data);
      navigate(paths.login);
    },
    onError(error) {
      toast.error(error.message, { id: 'asyntoast' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      toast.loading('Registering...', { id: 'asyntoast' });
      console.log(formData);
      signupMutation.mutate({
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmpassword,
        is_donor: formData.is_donor,
        is_receiver: formData.is_receiver,
      });
    }
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
            value={formData.first_name}
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
            value={formData.last_name}
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
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={formData.role}
              name="role"
              onChange={handleChange}
              label="Event to Send"
              MenuProps={{
                PaperProps: {
                  sx: {
                    zIndex: 44444,
                    maxHeight: 300,
                  },
                },
              }}
              style={{
                zIndex: 44444,
              }}
            >
              <MenuItem value="">
                <em>--</em>
              </MenuItem>
              <MenuItem value="donor">Donor</MenuItem>
              <MenuItem value="reciever">Reciever</MenuItem>
            </Select>
            <FormHelperText
              sx={{
                ml: 0,
              }}
            >
              Register As
            </FormHelperText>
          </FormControl>
          {errors.role && (
            <Typography sx={{ color: 'red', fontSize: '10px' }}>
              {errors.role}
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
            name="confirmpassword"
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
        {signupMutation.isPending ? 'Loading...' : 'Sign Up'}
      </Button>
    </>
  );
};

export default SignupForm;
