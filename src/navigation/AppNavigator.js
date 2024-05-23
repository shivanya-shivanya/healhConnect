import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup/Signup';
import * as screens  from '../Screens';
import TabRoutes from './TabRoutes';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'splash'} component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name={'Signup'} component={screens.Signup} options={{ headerShown: false }} />
        <Stack.Screen name={'TabRoutes'} component={TabRoutes} options={{ headerShown: false }} />
        <Stack.Screen name={'Home'} component={screens.Home} options={{ headerShown: false }} />
        <Stack.Screen name={'Policy'} component={screens.Policy} options={{ headerShown: false }} />
        <Stack.Screen name={'Claim'} component={screens.Claim} options={{ headerShown: false }} />
        <Stack.Screen name={'More'} component={screens.More} options={{ headerShown: false }} />
        <Stack.Screen name={'DetailScreen'} component={screens.DetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;