import {
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  credentailsMenuLinks,
  CredentailsMenuLinks,
} from 'layouts/main-layout/sidebar/CredentailsMenuLinks';
import { useLocation } from 'react-router-dom';
interface CredentailsProps {
  menuItem: CredentailsMenuLinks;
  onDrawerClose?: () => void;
}
const CredentailsItem = ({ menuItem, onDrawerClose }: CredentailsProps) => {
  const { icon: Icon } = menuItem;
  const itemIcon = Icon ? (
    <Icon sx={{ width: { xs: 20, xl: 24 }, height: { xs: 20, xl: 24 } }} />
  ) : null;
  const location = useLocation();

  // check if list item is active
  const isActive =
    menuItem.title ===
    credentailsMenuLinks.find((item) => item.link === location.pathname)?.title;

  return (
    <ListItem
      key={menuItem.id}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bgcolor: isActive ? 'primary.main' : 'transparent',
          top: 0,
          bottom: 0,
          left: 0,
          width: 6,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          transition: 'background-color 0.5s ease',
          height: 30,
          alignSelf: 'center',
        },
      }}
    >
      <Link
        href={menuItem.link}
        onClick={onDrawerClose}
        sx={{
          py: 1,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.325,
          flex: 1,
          borderRadius: 2,
          color: isActive
            ? 'primary.main'
            : menuItem.available
              ? 'grey[700]'
              : 'action.disabled',
          transition: 'color 0.35s ease',
          '&:hover, &:focus': {
            backgroundColor: 'neutral.light',
            boxShadow: 'shadows[10]',
            color: !menuItem.available ? 'action.disabled' : 'primary.main',
            '& .MuiSvgIcon-root': {
              color: !menuItem.available ? 'action.disabled' : 'primary.main',
            },
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 'auto',

            color: isActive
              ? 'primary.main'
              : menuItem.available
                ? 'neutral.dark'
                : 'action.disabled',
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: { xs: 'body1.fontSize', xl: 'h6.fontSize' },
                fontWeight: 500,
                textTransform: 'capitalize',
              }}
            >
              {menuItem.title}
            </Typography>
          }
        />
      </Link>
    </ListItem>
  );
};

export default CredentailsItem;
