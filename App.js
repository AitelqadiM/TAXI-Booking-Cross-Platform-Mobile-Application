import React, { useEffect, useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RiderAuthenticateScreen from "./screens/RiderAuthenticateScreen";
import '@react-native-community/netinfo'
import '@react-navigation/native'
import '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import 'react-native-screens'
import 'react-native-reanimated'
import 'react-native-reanimated'
import HomeScreen from "./screens/HomeScreen";
import DriverAuthenticateScreen from "./screens/DriverAuthenticateScreen";
import MapScreen from "./screens/MapScreen";
import DriverScreen from "./screens/DriverScreen";
import DriverScreen1 from "./screens/DriverScreen1";
import RiderSignUpScreen from "./screens/RiderSignUpScreen";
import DriverSignUpScreen from "./screens/DriverSignUpScreen";
import RiderMapScreen from "./screens/RiderMapScreen";
import RiderRequest from "./screens/RiderRequest";
import PaymentScreen from "./screens/PaymentScreen";
import PayCreditCard from "./screens/PayCreditCard";
import DriverRequests from "./screens/DriverRequests";
import DriverRiderMap from "./screens/DriverRiderMap";

export default function App() {
  const Stack = createNativeStackNavigator();



  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding":"height"}
          style={{flex:1}}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64:0}>
          
         <Stack.Navigator >
           <Stack.Screen
             name='HomeScreen'
             component={HomeScreen}
             options={{
               headerShown: false,
             }}
           />
           <Stack.Screen
             name='RiderAuthenticateScreen'
             component={RiderAuthenticateScreen}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='DriverAuthenticateScreen'
             component={DriverAuthenticateScreen}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='MapScreen'
             component={MapScreen}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='DriverScreen'
             component={DriverScreen}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='RiderSignUpScreen'
             component={RiderSignUpScreen}
             options={{
               headerShown: false,
             }}
           />
           <Stack.Screen
             name='DriverSignUpScreen'
             component={DriverSignUpScreen}
             options={{
               headerShown: false,
             }}
           />
           <Stack.Screen
             name='RiderMapScreen'
             component={RiderMapScreen}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='PaymentScreen'
             component={PaymentScreen}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='PayCreditCard'
             component={PayCreditCard}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='RiderRequest'
             component={RiderRequest}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='DriverScreen1'
             component={DriverScreen1}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='DriverRequests'
             component={DriverRequests}
             options={{
               headerShown: false,
             }}
           />
            <Stack.Screen
             name='DriverRiderMap'
             component={DriverRiderMap}
             options={{
               headerShown: false,
             }}
           />
         </Stack.Navigator>
         </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>


    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92a8d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
