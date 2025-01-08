import { SvgIconProps } from '@mui/material';
import {
  AnalysisIcon,
  CredentialIcon,
  WidgetIcon,
} from 'components/icons/menu-icons/CredentialIcons';

export enum linkEnum {
  Analysis = 'Analysis',
  Management = 'Credentials',
  Widget = 'Widget',
}

export interface CredentailsMenuLinks {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const credentailsMenuLinks: CredentailsMenuLinks[] = [
  {
    id: 1,
    title: linkEnum.Analysis,
    link: '/analysis',
    icon: AnalysisIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Management,
    link: '/listings',
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
