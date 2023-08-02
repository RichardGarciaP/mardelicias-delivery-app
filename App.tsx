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


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [toggle, setToggle] = useState(false)

  return (
    <DetailPlant />
  );
}

export default App;
