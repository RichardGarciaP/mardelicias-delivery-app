import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Login from '@/modules/auth/login';
import EReceipt from '@/modules/private/orders/sections/eReceipt';

import Orders from '@/modules/private/orders';
import Location from '@/modules/private/location';

export type RootStackParamList = {
  login: undefined;
  orders: undefined;
  editProfile: undefined;
  eReceipt: {id: number};
  location: {latitude: number; longitude: number};
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
    path: 'eReceipt',
    component: EReceipt,
    private: true,
  },
  {
    path: 'location',
    component: Location,
    private: true,
  },
];
export default RoutesStack;
