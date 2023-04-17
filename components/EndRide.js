import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DriverScreen from '../screens/DriverScreen'
import { useNavigation } from '@react-navigation/native'

const EndRide = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl font-bold`}>Go to Rider's Destination</Text>
        <TouchableOpacity
        style={tw`bg-green-300 m-1 mb-5 py-5 rounded-full`}
        onPress={()=>navigation.navigate(DriverScreen)}
        >
            <Text style = {tw`text-center font-bold`}>Finish Ride</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default EndRide

const styles = StyleSheet.create({})