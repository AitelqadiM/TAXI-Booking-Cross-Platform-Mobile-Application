import { StyleSheet, Text, View,SafeAreaView,ImageBackground } from 'react-native'
import React from 'react'
import LoadingView from 'react-native-loading-view'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import RiderMapScreen from './RiderMapScreen'


const RiderRequest = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 items-center content-evenly`}>
      <ImageBackground
      source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/road-lines-png-4.png'}} 
      resizeMode="cover"
      style={tw`flex-1 p-1.5`}>
      <Text style= {tw`  p-1 pl-5 pr-5 pb-5 pt-5 bg-green-300 text-center  text-lg font-bold`}>
            Your Taxi will be here in few minutes!!
              Thank You For Your Patience
      </Text>
      <LoadingView loading={true} style={tw`mb-10`}></LoadingView>
      <TouchableOpacity
      style= {tw`  p-1 pl-5 pr-5 pb-5 pt-5 bg-green-300 rounded-full m-1`}
      onPress={()=>navigation.navigate(RiderMapScreen)}
      >

        <Text style={tw`text-lg text-center font-bold`}>
                  Cancel Request
        </Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>

  )
}

export default RiderRequest

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})