import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {AppRoutes} from './routes';
import store from './store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <AppRoutes />
      </PaperProvider>
    </StoreProvider>
  );
}
