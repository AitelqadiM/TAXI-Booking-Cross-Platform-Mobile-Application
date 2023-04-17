import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapDriver from '../components/MapDriver'
import tw from 'tailwind-react-native-classnames'
import { createStackNavigator } from '@react-navigation/stack'
import { Stack } from '@chakra-ui/react'
import StartRide from '../components/StartRide'
import EndRide from '../components/EndRide'

const DriverRiderMap = () => {
    const Stack = createStackNavigator();
  return (
    <View>

    <View style={tw`h-2/3`}>
      <MapDriver/>
    </View>

    <View style={tw`h-1/2`}>
        <Stack.Navigator>
            <Stack.Screen
                name="StartRide"
                component={StartRide}
                options={{
                    headerShown: false,
                }}
                />
            <Stack.Screen
                name="EndRide"
                component={EndRide}
                options={{
                    headerShown: false,
                }}
                />
        </Stack.Navigator>
    </View>

    </View>
  )
}

export default DriverRiderMap

const styles = StyleSheet.create({})