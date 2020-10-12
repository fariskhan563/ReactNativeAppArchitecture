import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// App Screens
import Home from '../screens/home';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  );
}

export default AppNavigator;
