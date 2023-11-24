import Home from '@/modules/private/home';
import {
  home as HomeIcon,
  user as UserIcon,
  shoppingBag,
} from '@/shared/assets/icons';
import Profile from '@/modules/private/profile';
import Orders from '@/modules/private/orders';

export default [
  {
    id: '1',
    displayName: 'general.home',
    name: 'homeTab',
    icon: HomeIcon,
    component: Home,
  },
  {
    id: '3',
    displayName: 'general.chat',
    name: 'chat',
    icon: shoppingBag,
    component: Orders,
  },
  {
    id: '4',
    displayName: 'general.profile',
    name: 'profile',
    icon: UserIcon,
    component: Profile,
  },
];
