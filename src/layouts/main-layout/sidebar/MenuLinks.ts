import { SvgIconProps } from '@mui/material';
import {
  OverviewIcon,
  TransactionIcon,
} from 'components/icons/menu-icons/CredentialIcons';
export enum linkEnum {
  DroffSites = 'Droff Sites',
  AddSite = 'Add Location',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const locationLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.DroffSites,
    link: '/droffsites',
    icon: OverviewIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.AddSite,
    link: '/addsite',
    icon: TransactionIcon,
    available: true,
  },
  // {
  //   id: 3,
  //   title: linkEnum.Wallets,
  //   link: '/wallets',
  //   icon: WalletIcon,
  //   available: true,
  // },
  // {
  //   id: 4,
  //   title: linkEnum.Addresses,
  //   link: '/addresses',
  //   icon: AddressIcon,
  //   available: true,
  // },
];
