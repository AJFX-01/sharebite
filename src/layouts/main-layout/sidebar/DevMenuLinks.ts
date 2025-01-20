import { SvgIconProps } from '@mui/material';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';

export enum linkEnum {
  Settings = 'Profile Settings',
}

export interface DevLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const devLinks: DevLinkType[] = [
  {
    id: 1,
    title: linkEnum.Settings,
    link: '/profile',
    icon: SettingsIcon,
    available: true,
  },
];
