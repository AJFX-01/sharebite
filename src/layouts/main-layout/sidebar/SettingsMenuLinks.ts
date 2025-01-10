import ApiKeyIcon from 'components/icons/menu-icons/ApiKeyIcon';
import TeamIcon from 'components/icons/menu-icons/TeamIcon';


export enum linkEnum {
  Donor = 'Donors',
  Receiver = 'Receivers',
}

export interface SettingsMenuLinks {
  id: number;
  title: string;
  link: string;
  icon: () => JSX.Element;
  available: boolean;
}
export const usersMenuLinks: SettingsMenuLinks[] = [
  {
    id: 1,
    title: linkEnum.Donor,
    link: '/donors',
    icon: TeamIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Receiver,
    link: '/recievers',
    icon: ApiKeyIcon,
    available: true,
  },
  // {
  //   id: 3,
  //   title: linkEnum.WebHooks,
  //   link: '/webhooks',
  //   icon: WebhookIcon,
  //   available: true,
  // },
  // {
  //   id: 4,
  //   title: linkEnum.KeyConfig,
  //   link: '/keyconfig',
  //   icon: KeyConfigIcon,
  //   available: true,
  // },
];
