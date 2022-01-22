import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerMenu from './DrawerMenu.routes';
import Result from '../screens/Result';
import History from '../screens/History';

export type RootStackParamList = {
  Main: undefined;
  Result: undefined;
  History: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={DrawerMenu} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default StackScreens;
