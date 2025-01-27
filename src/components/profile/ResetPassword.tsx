import {
  Popover,
  Card,
  Typography,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import ApiRequests from 'api';
import { useFormValidation } from 'hooks/useFormValidation';
import { useBreakpoints } from 'providers/useBreakpoints';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Fragment } from 'react/jsx-runtime';
import AuthSchemas from 'schema/auth';

interface ResetPasswordProps {
  open: HTMLElement | null;
  onClose: () => void;
}
const ResetPassword = ({ open, onClose }: ResetPasswordProps) => {
  const [oldPassword, setcOldPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setconfirmPassword] = useState<string>('');
  const { errors, validate } = useFormValidation(
    AuthSchemas.resetpasswordSchema,
  );
  const { up } = useBreakpoints();
  const upSM = up('sm');

  const resetpasswordMutation = useMutation({
    mutationFn: ApiRequests.resetPassword,
    onSuccess(data) {
      toast.success('passwordnreset successful');
      console.log(data);
      onClose();
    },
    onError(error) {
      toast.error(error.message, { id: 'asyntoast' });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    // Handle password reset logic here
    e.preventDefault();
    if (
      validate({
        password: password,
        confirmpassword: confirmPassword,
      })
    ) {
      resetpasswordMutation.mutate({
        current_password: oldPassword,
        new_password: password,
      });
    }
    console.log('Adding a new member:', password);
  };

  return (
    <Fragment>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              ml: 0.75,
              width: 400,
              bgcolor: 'common.white',
              borderRadius: '3%',
            },
          },
        }}
      >
        <Card
          sx={{
            p: { xs: 3, sm: 5 },
            width: 1,
            maxWidth: 480,
            backgroundColor: 'transparent',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="700"
            fontSize="15px"
            sx={{ mb: 3 }}
          >
            Reset Password
          </Typography>
          <>
            <Stack spacing={3}>
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="Old password"
                label="Old Password"
                value={oldPassword}
                onChange={(e) => setcOldPassword(e.target.value)}
              />
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="password"
                label="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <Typography sx={{ color: 'red', fontSize: '10px' }}>
                  {errors.password}
                </Typography>
              )}
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="confirmPassword"
                label="Confirm New Passowrd"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
              {errors.confirmpassword && (
                <Typography sx={{ color: 'red', fontSize: '10px' }}>
                  {errors.confirmpassword}
                </Typography>
              )}
            </Stack>

            <Button
              fullWidth
              size={upSM ? 'large' : 'medium'}
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, fontSize: 12 }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </>
        </Card>
      </Popover>
    </Fragment>
  );
};

export default ResetPassword;
