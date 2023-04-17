import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformationDriver } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import EndRide from './EndRide'

const StartRide = () => {
    const navigation = useNavigation();
    const travelTimeInformationDriver = useSelector(selectTravelTimeInformationDriver)
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl font-bold`}>Go to Pick Up - - {travelTimeInformationDriver?.distance?.text}</Text>
        <TouchableOpacity
        style={tw`bg-green-300 m-1 mb-5 py-5 rounded-full`}
        onPress={()=>navigation.navigate(EndRide)}
        >
            <Text style = {tw`text-center font-bold`}>Start Ride</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default StartRide

const styles = StyleSheet.create({})