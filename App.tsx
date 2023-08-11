/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import Wrapper from "@/shared/components/wrapper";
import { Button, ButtonSecondary } from "./src/shared/components/buttons/";
import ButtonOutline from "./src/shared/components/buttons/btnOutline";
import Toggle from "@/shared/components/toggle";
import Input from "@/shared/components/input";
import Welcome from "@/modules/auth/welcome";
import CreateAccount from "@/modules/auth/createAccount";
import Login from "@/modules/auth/login";
import OtpForm from "@/shared/components/otpForm";
import HeaderWithIcon from "@/shared/components/headerBack";
import ForgotPassword from "@/modules/auth/forgotPassword";
import EnterOtp from "@/modules/auth/enterOtp";
import EnterNewPassword from "@/modules/auth/enterNewPassword";
import Home from "@/modules/private/home";
import Notifications from "@/modules/private/home/sections/notifications";
import Favorite from "@/modules/private/home/sections/favorite";
import PlantList from "@/modules/private/plantList";
import DetailPlant from "@/modules/private/detailPlant";
import { createStackNavigator } from "@react-navigation/stack";
import RoutesStack, { RootStackParamList } from "@/shared/routes/stack";
import RoutesTab from '@/shared/routes/tab';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Typography from "@/shared/components/typography";
import { normalize } from "@/shared/helpers";
import { palette, semantic } from "@/shared/constants/colors";
import Icon from "@/shared/components/icon";
import useDarkMode from "@/shared/hooks/useDarkMode";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  const {isDarkMode} = useDarkMode()
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {RoutesTab.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarStyle: {
              backgroundColor: isDarkMode ? semantic.background.dark.d500 : semantic.background.white.w500,
            },
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  customStyles={{
                    tintColor: focused
                      ? palette.main.p500
                      : semantic.text.grey,
                  }}
                  icon={route.icon}
                />
              );
            },
            tabBarLabel: ({focused}) => {
              return null;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [toggle, setToggle] = useState(false)

  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'welcome'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="tab" component={TabNavigation} />
          {RoutesStack.map(route => {
            return (
              <Stack.Screen
                key={route.path}
                name={route.path}
                component={route.component}
              />
            );
          })}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
