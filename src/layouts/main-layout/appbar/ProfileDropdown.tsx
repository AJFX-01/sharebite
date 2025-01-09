import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  Menu,
  Stack,
  Typography,
} from '@mui/material';
// import ProfileImage from 'assets/avatar.jpg';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Fragment } from 'react/jsx-runtime';
// import { logout } from 'redux/store/authslice';

/* ------------------------Profile dropdown Data --------------------------- */
const profileData = [
  {
    href: '!settings',
    title: 'Company Profile',
    subtitle: 'Account Settings',
    icon: 'fa:user-circle-o',
    color: 'primary.light',
  },
];
/* -------------------------------------------------------------------------- */
const ProfileDropdown = () => {
  // const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenDropdown = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <Button sx={{ p: 0, position: 'relative' }} onClick={handleOpenDropdown}>
        <Typography color="#0047CC" variant="h3" fontWeight="700">
          Ezrah Technologies
        </Typography>
        <div style={{ paddingLeft: 15 }}>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.4 0.299988L6 4.89999L10.6 0.299988L12 1.69999L6 7.69999L0 1.69999L1.4 0.299988Z"
              fill="#0047CC"
            />
          </svg>
        </div>
      </Button>
      {/* Profile Menu Dropdown*/}
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: 280,
            bgcolor: 'common.white',
          },
        }}
      >
        <Box p={3}>
          <Divider />
          {profileData.map((profileItem) => (
            <Box key={profileItem.title} sx={{ py: 1.5, px: 0 }}>
              <Link href={profileItem.href}>
                <Stack direction="row" spacing={1.5}>
                  <Stack
                    direction="row"
                    sx={{
                      width: 45,
                      height: 45,
                      bgcolor: 'neutral.light',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 1.5,
                    }}
                  >
                    <Avatar
                      variant="rounded"
                      sx={{
                        minwidth: 24,
                        height: 24,
                        bgcolor: 'transparent',
                      }}
                    >
                      <IconifyIcon
                        icon={profileItem.icon}
                        color={profileItem.color}
                      />
                    </Avatar>
                  </Stack>
                  <div>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      noWrap
                      sx={{
                        width: 150,
                      }}
                    >
                      {profileItem.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        width: 150,
                      }}
                      noWrap
                    >
                      {profileItem.subtitle}
                    </Typography>
                  </div>
                </Stack>
              </Link>
            </Box>
          ))}
          <Box mt={1.25}>
            <Button
              onClick={() => {}}
              variant="outlined"
              color="error"
              fullWidth
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Menu>
    </Fragment>
  );
};

export default ProfileDropdown;
