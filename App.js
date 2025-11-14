import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Beranda' }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ title: 'Detail Tempat' }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profil' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
