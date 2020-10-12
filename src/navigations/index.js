import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// Auth Screens
import Login from '../screens/login';

// App Stack
import AppNavigator from './app-navigator';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </>
  );
}

export default MainNavigation;
