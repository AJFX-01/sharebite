import {
  AppBar,
  Box,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import ProfileDropdown from 'layouts/main-layout/appbar/ProfileDropdown';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  onDrawerToggle: () => void;
}
const MainNavbar = ({ onDrawerToggle }: NavbarProps) => {
  // const [open, setOpen] = useState<null | HTMLElement>(null);
  // const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(false);

  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments.pop() : 'Overview';

  // const handleOpen = (event: MouseEvent<HTMLElement>) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setOpen(null);
  // };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'common.white' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: { xs: 0, lg: 2 },
          }}
        >
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: { sm: 'h2.fontSize', xl: 'h1.fontSize' },
              fontWeight: 600,
              color: 'primary.darker',
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              textTransform: 'capitalize',
            }}
          >
            {routeName}
          </Typography>
          <Stack
            direction="row"
            gap={1}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <Link href="/" sx={{ display: 'flex', p: 0.5 }}>
              <Image
                src="../../../../coincord.svg"
                alt="Logo"
                sx={{ width: 25 }}
              />
            </Link>
            <IconButton
              onClick={onDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <IconifyIcon
                icon="mingcute:menu-line"
                color="primary.darker"
                width={25}
              />
            </IconButton>
          </Stack>

          <Stack direction="row" sx={{ alignItems: 'center' }}>
            {/* <Stack direction="row" sx={{ gap: { xs: 2.5, xl: 3.75 } }}>
              // {/* <SettingsDropdown /> */}
            {/* <IconButton sx={{ bgcolor: 'background.paper' }} onClick={handleOpen}>
                <IconifyIcon
                  color="error.main"
                  icon="lucide:bell-dot"
                  sx={{ width: { xs: 18, md: 20, xl: 25 }, height: { xs: 18, md: 20, xl: 25 } }}
                />
              </IconButton> */}

            {/* <NotificationDropdown open={open} onClose={handleClose} />
            </Stack> */}
            <ProfileDropdown />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavbar;
