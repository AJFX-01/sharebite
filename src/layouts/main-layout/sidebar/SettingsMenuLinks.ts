import ApiKeyIcon from 'components/icons/menu-icons/ApiKeyIcon';
import KeyConfigIcon from 'components/icons/menu-icons/KeyConfigIcon';
import TeamIcon from 'components/icons/menu-icons/TeamIcon';
import WebhookIcon from 'components/icons/menu-icons/WebhookIcon';

export enum linkEnum {
  Teams = 'Teams',
  ApiKeys = 'API keys',
  WebHooks = 'Webhooks',
  KeyConfig = 'Keys Configurations',
}

export interface SettingsMenuLinks {
  id: number;
  title: string;
  link: string;
  icon: () => JSX.Element;
  available: boolean;
}
export const settingsMenuLinks: SettingsMenuLinks[] = [
  {
    id: 1,
    title: linkEnum.Teams,
    link: '/teams',
    icon: TeamIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.ApiKeys,
    link: '/apikeys',
    icon: ApiKeyIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.WebHooks,
    link: '/webhooks',
    icon: WebhookIcon,
    available: true,
  },
  {
    id: 4,
    title: linkEnum.KeyConfig,
    link: '/keyconfig',
    icon: KeyConfigIcon,
    available: true,
  },
];
