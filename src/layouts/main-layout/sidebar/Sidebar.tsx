import { Drawer, List, Toolbar, Typography } from '@mui/material';
// import Logo from 'components/common/Logo';
import { locationLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import { donationsMenuLinks } from 'layouts/main-layout/sidebar/DonationMenuLinks';
import { devLinks } from 'layouts/main-layout/sidebar/DevMenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import CredentailsItem from 'layouts/main-layout/sidebar/DonationsItem';
import DevItem from 'layouts/main-layout/sidebar/DevItem';
import SimpleBar from 'simplebar-react';
import { usersMenuLinks } from './SettingsMenuLinks';
import SettingsItem from './SettingsListItem';
interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
}
const Sidebar = ({ drawerWidth }: SidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: {
            xs: drawerWidth.sm,
            lg: drawerWidth.md,
            xl: drawerWidth.lg,
          },
        },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 2,
        py: 3.5,
        overflow: 'hidden',
        width: {
          xs: drawerWidth.sm,
          lg: drawerWidth.md,
          xl: drawerWidth.lg,
        },
      }}
    >
      <Toolbar sx={{ gap: 1, minHeight: 100, cursor: 'pointer' }}>
        <Typography color="#0047CC" variant="h3" fontWeight="700">
          SHAREBITE
        </Typography>
      </Toolbar>

      <SimpleBar style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <h3 style={{ paddingLeft: 14, fontSize: 16, fontWeight: 700 }}>
            Overview
          </h3>
          {donationsMenuLinks.map((menu) => (
            <CredentailsItem key={menu.id} menuItem={menu} />
          ))}
        </List>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <h3 style={{ paddingLeft: 14, fontSize: 16, fontWeight: 700 }}>
            Locations
          </h3>
          {locationLinks.map((menu) => (
            <MenuListItem key={menu.id} menuItem={menu} />
          ))}
        </List>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <h3 style={{ paddingLeft: 14, fontSize: 16, fontWeight: 700 }}>
            Users
          </h3>
          {usersMenuLinks.map((menu) => (
            <SettingsItem key={menu.id} menuItem={menu} />
          ))}
        </List>
      </SimpleBar>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          position: 'absolute',
          bottom: 0,
        }}
      >
        {devLinks.map((menu) => (
          <DevItem key={menu.id} menuItem={menu} />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
