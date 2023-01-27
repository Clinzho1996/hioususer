/* eslint-disable quotes */
import 'react-native-gesture-handler';
import React, {Component, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigations/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
