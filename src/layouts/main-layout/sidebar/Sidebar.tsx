import { Drawer, List, Toolbar, Typography } from '@mui/material';
// import Logo from 'components/common/Logo';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import { credentailsMenuLinks } from 'layouts/main-layout/sidebar/CredentailsMenuLinks';
import { devLinks } from 'layouts/main-layout/sidebar/DevMenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import CredentailsItem from 'layouts/main-layout/sidebar/CredentailsItem';
import DevItem from 'layouts/main-layout/sidebar/DevItem';
import SimpleBar from 'simplebar-react';
import { settingsMenuLinks } from './SettingsMenuLinks';
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
        <Typography>SHAREBITE</Typography>
      </Toolbar>

      <SimpleBar style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <h3 style={{ paddingLeft: 14, fontSize: 16 }}>Credentials</h3>
          {credentailsMenuLinks.map((menu) => (
            <CredentailsItem key={menu.id} menuItem={menu} />
          ))}
        </List>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <h3 style={{ paddingLeft: 14, fontSize: 16 }}>Wallets</h3>
          {menuLinks.map((menu) => (
            <MenuListItem key={menu.id} menuItem={menu} />
          ))}
        </List>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <h3 style={{ paddingLeft: 14, fontSize: 16 }}>Settings</h3>
          {settingsMenuLinks.map((menu) => (
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
