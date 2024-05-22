import { StyleSheet, Text, TouchableOpacity, View, NativeModules, TextInput, SafeAreaView, Alert } from 'react-native'
import React from 'react';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const { PipModule } = NativeModules;
  const handleClick = () => {
    console.log("PipModule", PipModule, "NativeModules", NativeModules)
    PipModule.EnterPipModule();
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('token:', token);
  }

  React.useEffect(() => {
    requestUserPermission();
    getToken();
  }, [])

  return (
    // <TouchableOpacity onPress={handleClick}>
    //   <Text>Click me</Text>
    // </TouchableOpacity>
    // <NavigationContainer>
    //   <MyStack />
    // </NavigationContainer>

    // <View style ={{flex:1,alignSelf:'center',justifyContent:'center'}}>
    //   <Text>Hello</Text>
    // </View>
    <AppNavigator/>

  )
}

export default App

const styles = StyleSheet.create({})