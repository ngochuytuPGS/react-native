import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './app/configs/routes';
import WelcomeScreen from './app/modules/welcome/screens/WelcomeScreen';
import DashboardScreen from './app/modules/photos/screens/DashboardScreen';
import DetailScreen from './app/modules/photos/screens/DetailScreen';

export type RootStackParams = {
  [ROUTES.welcome]: undefined;
  [ROUTES.dashboard]: undefined;
  [ROUTES.detail]: { uri: string };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={ROUTES.welcome}>
        <RootStack.Screen name={ROUTES.welcome} component={WelcomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={ROUTES.dashboard} component={DashboardScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={ROUTES.detail} component={DetailScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
