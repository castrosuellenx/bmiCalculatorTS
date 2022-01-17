import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {Provider} from 'react-redux';

import store from './store';
import App from './App';

const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
