import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import CustomDrawer from '../components/CustomDrawer';
import Home from '../screens/Home';
import History from '../screens/History';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerInactiveBackgroundColor: theme.colors.boxPrimary,
        drawerLabelStyle: {
          fontFamily: theme.fontFamily.bold,
          color: theme.colors.text,
          fontSize: RFValue(22),
          paddingLeft: RFValue(12),
        },
      }}
      drawerContent={rest => <CustomDrawer {...rest} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
