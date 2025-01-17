import {
  Button,
  Card,
  Popover,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

const AddDonation = ({ open, onClose }: AddDonationProps) => {
  const [email, setEmail] = useState<string>(existingMemberData?.email || '');
  const [firstname, setFirstName] = useState<string>(
    existingMemberData?.firstname || '',
  );
  const [lastname, setLastName] = useState<string>(
    existingMemberData?.lastname || '',
  );
  const { up } = useBreakpoints();
  const upSM = up('sm');

  const handleSubmit = () => {
    // Handle password reset logic here
    console.log('Adding a new member:', email);
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
          <Typography variant="h4" fontWeight="700" fontSize="15px">
            {mode === 'edit'
              ? 'Edit Member Information'
              : 'Add a new memeber to the team'}
          </Typography>

          <Typography
            color="textSecondary"
            variant="body1"
            fontWeight="400"
            sx={{ mb: 2.5, mt: 1.5, fontSize: 12 }}
          >
            Please all informatons correctly
          </Typography>
          <>
            <Stack spacing={3}>
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="firstanme"
                label="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="lastname"
                label="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                fullWidth
                size={upSM ? 'medium' : 'small'}
                name="email"
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={mode === 'edit'}
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
              {mode === 'edit' ? 'Save Changes' : 'Send Invite Link'}
            </Button>
          </>
        </Card>
      </Popover>
    </Fragment>
  );
};

export default AddDonation;
