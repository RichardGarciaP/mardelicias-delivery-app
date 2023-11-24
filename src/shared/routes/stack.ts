import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Login from '@/modules/auth/login';
import EditProfile from '@/modules/private/profile/sections/editProfile';
import EReceipt from '@/modules/private/orders/sections/eReceipt';

import Orders from '@/modules/private/orders';

export type RootStackParamList = {
  login: undefined;
  orders: undefined;
  createAccount: undefined;
  enterOtp: undefined;
  enterNewPassword: undefined;
  forgotPassword: undefined;
  welcome: undefined;
  detailPlant: undefined;
  plantList: undefined;
  favorites: undefined;
  notifications: undefined;
  reviews: undefined;
  checkout: undefined;
  editProfile: undefined;
  vouchers: undefined;
  tracking: undefined;
  eReceipt: undefined;
  payments: undefined;
  newPayment: undefined;
  addNewAddress: undefined;
  language: undefined;
  conversation: undefined;
  chats: undefined;
};
export type RouteItem = {
  path: keyof RootStackParamList;
  component: any;
  private: boolean;
};
export type RouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type NavigationProps = StackNavigationProp<RootStackParamList>;

const RoutesStack: RouteItem[] = [
  {
    path: 'login',
    component: Login,
    private: false,
  },
  {
    path: 'orders',
    component: Orders,
    private: true,
  },
  {
    path: 'editProfile',
    component: EditProfile,
    private: true,
  },
  {
    path: 'eReceipt',
    component: EReceipt,
    private: true,
  },
];
export default RoutesStack;
