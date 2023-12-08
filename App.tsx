import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import RoutesStack, {RootStackParamList} from '@/shared/routes/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import useEffectOnce from '@/shared/hooks/useEffectOnce';
import {storage} from '@/shared/helpers';
import i18n from 'i18next';
import {SessionContextProvider} from '@supabase/auth-helpers-react';
import {supabase} from '@/shared/services/client';
import {PremissionsProvider} from '@/context/PermissionsContext';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  async function getTranslate() {
    const ing = await storage.get('language');
    console.log('ing', ing);
    if (ing) {
      await i18n.changeLanguage(ing);
      return;
    }
    await i18n.changeLanguage('es');
  }

  useEffectOnce(() => {
    getTranslate().catch();
  }, []);

  return (
    <SessionContextProvider supabaseClient={supabase}>
      <NavigationContainer>
        <PremissionsProvider>
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
        </PremissionsProvider>
      </NavigationContainer>
    </SessionContextProvider>
  );
}

export default App;
