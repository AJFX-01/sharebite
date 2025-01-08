import { SvgIconProps } from '@mui/material';
import {
  AddressIcon,
  OverviewIcon,
  TransactionIcon,
  WalletIcon,
} from 'components/icons/menu-icons/CredentialIcons';
export enum linkEnum {
  Overview = 'Overview',
  Transactions = 'transactions',
  Wallets = 'wallets',
  Addresses = 'Addresses',
  Settings = 'Settings',
  ForgetPassword = 'forget-password',
  ResetPassword = 'reset-password',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Overview,
    link: '/overview',
    icon: OverviewIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Transactions,
    link: '/transactions',
    icon: TransactionIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.Wallets,
    link: '/wallets',
    icon: WalletIcon,
    available: true,
  },
  {
    id: 4,
    title: linkEnum.Addresses,
    link: '/addresses',
    icon: AddressIcon,
    available: true,
  },
];
