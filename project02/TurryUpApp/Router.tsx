import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Payment from './src/pages/Payment';
import Login from './src/pages/Login';
import Start from './src/pages/Start';

export type RootStackParamList = {
  Home: undefined;
  Payment: undefined;
  Start: undefined;
  Login: undefined;
};

export const RouterList = {
  Home: 'Home',
  Payment: 'Payment',
  Start: 'Start',
  Login: 'Login',
} as const;
export type RouterList = typeof RouterList[keyof typeof RouterList];

export default function Router() {
  const Stack = createNativeStackNavigator();
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={RouterList.Start}>
            <Stack.Screen
              name={RouterList.Home}
              options={{headerShown: false, animation: 'fade'}}>
              {_ => <Home />}
            </Stack.Screen>
            <Stack.Screen
              name={RouterList.Payment}
              options={{headerShown: false, animation: 'slide_from_right'}}>
              {_ => <Payment />}
            </Stack.Screen>
            <Stack.Screen
              name={RouterList.Start}
              options={{headerShown: false, animation: 'fade'}}>
              {_ => <Start />}
            </Stack.Screen>
            <Stack.Screen
              name={RouterList.Login}
              options={{headerShown: false, animation: 'slide_from_right'}}>
              {_ => <Login />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
