import { Drawer, List, Toolbar, Typography } from '@mui/material';
// import Logo from 'components/common/Logo';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import { credentailsMenuLinks } from 'layouts/main-layout/sidebar/CredentailsMenuLinks';
import { devLinks } from 'layouts/main-layout/sidebar/DevMenuLinks';
import CredentailsItem from 'layouts/main-layout/sidebar/CredentailsItem';
import DevItem from 'layouts/main-layout/sidebar/DevItem';
import SimpleBar from 'simplebar-react';

interface MobileSidebarProps {
  onDrawerClose: () => void;
  onDrawerTransitionEnd: () => void;
  mobileOpen: boolean;
  drawerWidth: number;
}
const MobileSidebar = ({
  onDrawerClose,
  onDrawerTransitionEnd,
  mobileOpen,
  drawerWidth,
}: MobileSidebarProps) => {
  return (
    <Drawer
      anchor="left"
      onTransitionEnd={onDrawerTransitionEnd}
      open={mobileOpen}
      onClose={onDrawerClose}
      variant="temporary"
      transitionDuration={200}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{
        sx: {
          border: '0 !important',
          boxShadow: (theme) => theme.shadows[2],
          width: drawerWidth,
        },
      }}
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        gap: 2,
        py: 3.5,
        overflow: 'hidden',
        width: drawerWidth,
      }}
    >
      <Toolbar sx={{ gap: 1, minHeight: 100 }}>
        <Typography>
          SHAREBITE
        </Typography>
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

export default MobileSidebar;
