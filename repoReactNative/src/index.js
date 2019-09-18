import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#ff9033"/>
      <Routes />
    </>
  );
};

export default App;
