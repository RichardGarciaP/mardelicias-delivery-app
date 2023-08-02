import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import { CategoryDTO, OrderDTO, ProductDTO } from "@/shared/DTO";
import Login from "@/modules/auth/login";
import CreateAccount from "@/modules/auth/createAccount";
import EnterOtp from "@/modules/auth/enterOtp";
import EnterNewPassword from "@/modules/auth/enterNewPassword";
import ForgotPassword from "@/modules/auth/forgotPassword";
import Welcome from "@/modules/auth/welcome";
import DetailPlant from "@/modules/private/detailPlant";
import PlantList from "@/modules/private/plantList";

export type RootStackParamList = {
  login: undefined;
  createAccount: undefined;
  enterOtp: undefined;
  enterNewPassword: undefined;
  forgotPassword: undefined;
  welcome: undefined;
  detailPlant: undefined;
  plantList: undefined;
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
    path: 'createAccount',
    component: CreateAccount,
    private: false,
  },
  {
    path: 'enterOtp',
    component: EnterOtp,
    private: false,
  },
  {
    path: 'enterNewPassword',
    component: EnterNewPassword,
    private: true,
  },
  {
    path: 'forgotPassword',
    component: ForgotPassword,
    private: true,
  },
  {
    path: 'welcome',
    component: Welcome,
    private: true,
  },
  {
    path: 'detailPlant',
    component: DetailPlant,
    private: true,
  },
  {
    path: 'plantList',
    component: PlantList,
    private: true,
  },
];
export default RoutesStack;
