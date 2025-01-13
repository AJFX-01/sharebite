import { SvgIconProps } from '@mui/material';
import {
  OverviewIcon,
  WalletIcon,
} from 'components/icons/menu-icons/CredentialIcons';

export enum linkEnum {
  Dashboard = 'Dashboard',
  Reciepts = 'Reciepts',
}

export interface RecieverLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const recieverLinks: RecieverLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/reciever/dashboard',
    icon: OverviewIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.Reciepts,
    link: '/reciever/Reciepts',
    icon: WalletIcon,
    available: true,
  },
];
