import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home';
import SubmitButton from '../screens/submit-button';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  SubmitButton: SubmitButton
}, {
  initialRouteName: 'SubmitButton' // default is Home
});

export default createAppContainer(AppNavigator);