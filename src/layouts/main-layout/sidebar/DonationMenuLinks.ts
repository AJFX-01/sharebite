import { SvgIconProps } from '@mui/material';
import {
  AnalysisIcon,
  CredentialIcon,
  WidgetIcon,
} from 'components/icons/menu-icons/CredentialIcons';

export enum linkEnum {
  Dashboard = 'Dashboard',
  Donations = 'Donations',
  Widget = 'Widget',
}

export interface DonationsMenuLinks {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const donationsMenuLinks: DonationsMenuLinks[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/dashboard',
    icon: AnalysisIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Donations,
    link: '/donations',
    icon: CredentialIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.Widget,
    link: '/widget',
    icon: WidgetIcon,
    available: true,
  },
];
