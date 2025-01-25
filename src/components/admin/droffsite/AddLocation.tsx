import {
  Popover,
  Typography,
  Card,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import DroffSiteApiRequest from 'api/droffoff';
import { useUser } from 'context/userContext';

import { useBreakpoints } from 'providers/useBreakpoints';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Fragment } from 'react/jsx-runtime';

interface AddLocationProps {
  open: HTMLElement | null;
  onClose: () => void;
}
const AddLocation = ({ open, onClose }: AddLocationProps) => {
  const { user } = useUser();
  const [location, setLocation] = useState<string>('');
  const { up } = useBreakpoints();
  const upSM = up('sm');

  const addsiteMutation = useMutation({
    mutationFn: DroffSiteApiRequest.addSite,
    onSuccess() {
      toast.success('location added', { id: 'asyntoast' });
      onClose();
    },
    onError(error) {
      toast.error(error.message, { id: 'asyntoast' });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!location) {
      toast.error('please enter location');
      return;
    }
    toast.loading('adding location', { id: 'asyntoast' });
    addsiteMutation.mutate({
      location: location,
      added_by: user!.id,
    });
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
            Add a new location for donations
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
                name="location"
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
              {addsiteMutation.isPending ? 'Adding...' : 'Add location'}
            </Button>
          </>
        </Card>
      </Popover>
    </Fragment>
  );
};

export default AddLocation;
