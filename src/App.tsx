import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {ThemeProvider, useTheme} from 'styled-components/native';
import {useSelector} from 'react-redux';
import Routes from './routes';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  const {isDark} = useSelector(state => state.theme);

  const theme = isDark ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
