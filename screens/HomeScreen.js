import React from 'react';
import { StyleSheet, Text, View,Button, SafeAreaView,Image,TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-15`}>
          <Image
          style={{
              width: 250, 
              height: 250, 
              resizeMode:"contain",
          }}
          source={{
              uri: "https://logopond.com/logos/99f46a02143acb10e00279ffe737a57c.png",
          }}
          />
 
          <NavOptions />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

