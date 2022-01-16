import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import History from '../screens/History';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#080',
        drawerActiveBackgroundColor: '#EEE',
        drawerLabelStyle: {
          fontFamily: 'Leelawadee Bold',
          fontWeight: 'normal',
          fontSize: 20,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
