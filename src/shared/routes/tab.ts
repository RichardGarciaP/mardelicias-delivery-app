import Home from '@/modules/private/home';
import {
  home as HomeIcon,
  shippingCart,
  user as UserIcon,
  shoppingBag
} from "@/shared/assets/icons";
import Cart from "@/modules/private/cart";

export default [
  {
    id: '1',
    displayName: 'general.home',
    name: 'homeTab',
    icon: HomeIcon,
    component: Home,
  },
  {
    id: '2',
    displayName: 'general.bag',
    name: 'shop',
    icon: shippingCart,
    component: Cart,
  },
  {
    id: '3',
    displayName: 'general.chat',
    name: 'chat',
    icon: shoppingBag,
    component: Home,
  },
  {
    id: '4',
    displayName: 'general.profile',
    name: 'profile',
    icon: UserIcon,
    component: Home,
  },
];
