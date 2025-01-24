import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import DonationApiRequest from 'api/donation';
import { useUser } from 'context/userContext';
import { useFormValidation } from 'hooks/useFormValidation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DonationSchemas from 'schema/donation';

const MakeDonation = ({ onClose }: MakeDonationProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const { user } = useUser();
  const { errors, validate } = useFormValidation(DonationSchemas.makeDonation);
  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  const makeDonationMutation = useMutation({
    mutationFn: DonationApiRequest.makeDonation,
    onSuccess(data) {
      toast.success('Donation sucessful', { id: 'asyntoast' });
      console.log(data);
      onClose();
    },
    onError(error) {
      toast.error(error.message, { id: 'asyntoast' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      validate({
        title: title,
        description: description,
        location: selectedOption,
      })
    ) {
      toast.loading('Donating...', { id: 'asyntoast' });
      makeDonationMutation.mutate({
        title: title,
        description: description,
        location: selectedOption,
        donor: user?.id,
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          width: '100%',
          height: '100%',
          position: 'fixed',
          left: 0,
          right: 0,
          zIndex: 1111,
          top: 0,
        }}
      />
      <Box
        sx={{
          borderRadius: 5,
          position: 'fixed',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '60%' },
          height: '100%',
          background: '#fff',
          zIndex: 1112,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'scroll',
          p: 2,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.9s ease-in-out',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            flexGrow: 1,
            overflow: 'auto',
            p: 2,
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" rx="18" fill="#F2F3F3" />
              <path
                d="M18.7031 18L24.0938 23.3984L23.3906 24.1016L17.9922 18.7109L12.5938 24.1016L11.8906 23.3984L17.2812 18L11.8906 12.6016L12.5938 11.8984L17.9922 17.2891L23.3906 11.8984L24.0938 12.6016L18.7031 18Z"
                fill="#333333"
                stroke="#333333"
                stroke-width="1.2"
              />
            </svg>
          </Button>
          <Grid
            sx={{
              paddingTop: 5,
              width: '100%',
            }}
          >
            <>
              <Typography variant="h4" fontWeight="700" fontSize="15px">
                Make Donations
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
                fontWeight="400"
                sx={{ mb: 2.5, mt: 1.5, fontSize: 12 }}
              >
                Please enter details for the donations
              </Typography>

              <Stack spacing={3} position="relative">
                <TextField
                  name="title"
                  label="Donation title *"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                  <Typography sx={{ color: 'red', fontSize: '10px' }}>
                    {errors.title}
                  </Typography>
                )}
                <TextField
                  name="description"
                  label="Description *"
                  value={description}
                  multiline
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <Typography sx={{ color: 'red', fontSize: '10px' }}>
                    {errors.description}
                  </Typography>
                )}
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={selectedOption}
                    onChange={handleSelectChange}
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
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="New York, NY">Option 1</MenuItem>
                    <MenuItem value="San Fransisco, CA">Option 2</MenuItem>
                    <MenuItem value="Chicago, IL">Option 3</MenuItem>
                  </Select>
                  <FormHelperText
                    sx={{
                      ml: 0,
                    }}
                  >
                    Select a drop off location
                  </FormHelperText>
                  {errors.location && (
                    <Typography sx={{ color: 'red', fontSize: '10px' }}>
                      {errors.location}
                    </Typography>
                  )}
                </FormControl>
              </Stack>
            </>
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 3,
            mb: 0,
            background: '#',
            zIndex: 1112,
            borderTop: '1px solid #c7ebfc',
            p: 1,
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: 12,
                width: 150,
              }}
              onClick={handleSubmit}
            >
              {makeDonationMutation.isPending ? 'Donating...' : 'Donate'}
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default MakeDonation;
