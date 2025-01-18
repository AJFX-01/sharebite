import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useEffect, useState } from 'react';

const MakeDonation = ({ onClose }: MakeDonationProps) => {
  const [showHeaders, setShowHeaders] = useState<boolean>(false);
  const [email, setEmail] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  // const handleAddHeader = () => {
  //   setHeaders([...headers, { key: '', value: '' }]);
  // };

  // const handleRemoveHeader = (index: number) => {
  //   if (headers.length > 1) {
  //     setHeaders(headers.filter((_, i) => i !== index));
  //   }
  // };

  // const handleHeaderChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   index: number,
  // ) => {
  //   const updatedHeaders = [...headers];
  //   updatedHeaders[index] = { ...updatedHeaders[index], [e.target.name]: e.target.value };
  //   setHeaders(updatedHeaders);
  // };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
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
          top: 154,
          right: 150,
          width: { xs: '100%', md: '60%' },
          height: '70%',
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
            {!expanded && (
              <>
                <Typography variant="h4" fontWeight="700" fontSize="15px">
                  Add Donations
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
                    name="email"
                    label="Donation title *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    name="url"
                    label="Description *"
                    value={url}
                    multiline
                    onChange={(e) => setUrl(e.target.value)}
                  />
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
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                    <FormHelperText
                      sx={{
                        ml: 0,
                      }}
                    >
                      Select a drop off location
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </>
            )}
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
            >
              Make Donation
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default MakeDonation;
