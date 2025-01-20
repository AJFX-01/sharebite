import {
  Popover,
  Card,
  Typography,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

interface ResetPasswordProps {
  open: HTMLElement | null;
  onClose: () => void;
}
const ResetPassword = ({ open, onClose }: ResetPasswordProps) => {
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setconfirmPassword] = useState<string>();
  const { up } = useBreakpoints();
  const upSM = up('sm');

  const handleSubmit = () => {
    // Handle password reset logic here
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
                name="password"
                label="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="confirmPassword"
                label="Confirm Passowrd"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
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
