import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components/native';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './screens/Home';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
