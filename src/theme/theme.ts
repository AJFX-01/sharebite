import { createTheme, Shadows } from '@mui/material';
import AppBarComponent from './components/AppBar';
import AvatarComponent from './components/Avatar';
import ButtonComponent from './components/Button';
import ButtonBaseComponent from './components/ButtonBase';
import CardComponent from './components/Card';
import CardContentComponent from './components/CardContent';
import CssBaselineComponent from './components/CssBaseline';
import DataGridComponent from './components/DataGrid';
import DrawerComponent from './components/Drawer';
import FilledInputComponent from './components/form/FilledInput';
import InputComponent from './components/form/Input';
import InputAdornmentComponent from './components/form/InputAdornment';
import InputBaseComponent from './components/form/InputBase';
import InputLabelComponent from './components/form/InputLabel';
import OutlinedInputComponent from './components/form/OutlinedInput';
import IconButtonComponent from './components/IconButton';
import LinkComponent from './components/Link';
import ListItemComponent from './components/list/ListItem';
import ListItemTextComponent from './components/list/ListItemText';
import MenuComponent from './components/list/Menu';
import PaginationComponent from './components/Pagination';
import PaginationItemComponent from './components/pagination/PaginationItem';
import TabComponent from './components/Tab';
import TabsComponent from './components/Tabs';
import ToolbarComponent from './components/Toolbar';
import TouchRippleComponent from './components/TouchRipple';
// import type {} from '@mui/x-data-grid/themeAugmentation';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
export const theme = createTheme({
  palette,
  typography,
  shadows: [...shadows] as Shadows,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  components: {
    MuiAppBar: AppBarComponent,
    MuiAvatar: AvatarComponent,
    MuiButton: ButtonComponent,
    MuiButtonBase: ButtonBaseComponent,
    MuiCard: CardComponent,
    MuiCardContent: CardContentComponent,
    MuiCssBaseline: CssBaselineComponent,
    MuiDataGrid: DataGridComponent,
    MuiDrawer: DrawerComponent,
    MuiFilledInput: FilledInputComponent,
    MuiIconButton: IconButtonComponent,
    MuiInput: InputComponent,
    MuiInputBase: InputBaseComponent,
    MuiInputLabel: InputLabelComponent,
    MuiInputAdornment: InputAdornmentComponent,
    MuiLink: LinkComponent,
    MuiListItem: ListItemComponent,
    MuiListItemText: ListItemTextComponent,
    MuiMenu: MenuComponent,
    MuiOutlinedInput: OutlinedInputComponent,
    MuiPagination: PaginationComponent,
    MuiPaginationItem: PaginationItemComponent,
    MuiTab: TabComponent,
    MuiTabs: TabsComponent,
    MuiToolbar: ToolbarComponent,
    MuiTouchRipple: TouchRippleComponent,
  },
});
