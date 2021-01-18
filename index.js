import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { expo } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './store';

const appName = expo.name;
const store = configureStore();

const tossApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => tossApp);
