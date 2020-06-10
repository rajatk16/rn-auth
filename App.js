import {initializeApp} from 'firebase';
import React, {useEffect} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import firebaseConfig from './src/firebase';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SuccessScreen from './src/screens/SuccessScreen';

const Stack = createStackNavigator()

export default () => {
  useEffect(() => {
    initializeApp(firebaseConfig)
    const handleBackButton = () => {
      ToastAndroid.show('Back button is disabled', ToastAndroid.SHORT)
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', handleBackButton)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerLeft: null}}>
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}