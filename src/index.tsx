import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider, useTheme} from 'styled-components/native';
import Routes from './routes';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './screens/Home';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Home toggleTheme={toggleTheme} />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
