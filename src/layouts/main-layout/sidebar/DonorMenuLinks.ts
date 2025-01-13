import { SvgIconProps } from '@mui/material';
import {
  OverviewIcon,
  WalletIcon,
} from 'components/icons/menu-icons/CredentialIcons';

export enum linkEnum {
  Dashboard = 'Dashboard',
  History = 'Donation history',
}

export interface DonorLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const donorLinks: DonorLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/donor/dashboard',
    icon: OverviewIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.History,
    link: '/donor/history',
    icon: WalletIcon,
    available: true,
  },
];
