import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const RiderMapScreen = () => {
    const Stack = createStackNavigator();
  return (
    <View>

      <View style={tw`h-1/2`}>
          <Map/>
      </View>

      <View style={tw`h-1/2`}>
          <Stack.Navigator>
              <Stack.Screen
                name="NavigateCard"
                component={NavigateCard}
                options={{
                    headerShown: false,
                }}
              />
                <Stack.Screen
                name="RideOptionsCard"
                component={RideOptionsCard}
                options={{
                    headerShown: false,
                }}
              />
          </Stack.Navigator>
      </View>
    </View>
  )
}

export default RiderMapScreen

const styles = StyleSheet.create({})