/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import RoutesStack, {RootStackParamList} from '@/shared/routes/stack';
import {NavigationContainer} from '@react-navigation/native';
import useEffectOnce from '@/shared/hooks/useEffectOnce';
import {storage} from '@/shared/helpers';
import i18n from 'i18next';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  async function getTranslate() {
    const ing = await storage.get('language');
    console.log('ing', ing);
    if (ing) {
      await i18n.changeLanguage(ing);
      return;
    }
    await i18n.changeLanguage('en');
  }
  useEffectOnce(() => {
    getTranslate().catch();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'login'}
        screenOptions={{headerShown: false}}>
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
