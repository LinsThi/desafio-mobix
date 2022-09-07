import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppRoutes} from './routes';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <AppRoutes />
    </PaperProvider>
  );
}
