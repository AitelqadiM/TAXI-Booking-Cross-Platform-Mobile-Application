import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation,NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MapDriver from '../components/MapDriver'
import { Icon } from 'react-native-elements'
import DriverRequests from './DriverRequests'


const DriverScreen = () => {
  const navigation = useNavigation()

    return (
      <SafeAreaView style={tw`bg-green-300 h-full`}>
        
        <TouchableOpacity style={tw`flex-row justify-center items-center m-1`}
                  onPress={() => {return navigation.navigate(DriverRequests)}}>
        <Icon
          style={tw`p-2 bg-black rounded-full w-10`}
          name="notification"
          color="white" 
          type="antdesign"
          />
          <Text style={tw` text-black text-sm font-bold text-xl`}> Check the Current Requests</Text>
          <Icon
          style={tw`p-2 bg-black rounded-full w-10`}
          name="enter"
          color="white" 
          type="antdesign"
          />
        </TouchableOpacity>

        <View style={tw`h-5/6`}>
        <MapDriver/>
        </View>

        <View style={tw`h-1/6`}>
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate(HomeScreen);}}
            style= {tw` bg-green-200 m-1 items-center  border-8 border-green-300 ring-black`} >
            <View>
              <Image
                source={{ uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ca9a6e35154417.56ec0804b1a58.png"}}
                style={{width:500, height:90,resizeMode:"contain"}}
                />
            </View>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
      
      /*<NavigationContainer independent={true} >
        <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props} />)
      } >
          <Drawer.Screen name="Welcome Dear Driver" component={MapDriver} />   
          
          <Drawer.Screen name="Manage Profile" options={{headerShown: false}}>
            {()=> <DummyScreen name={"Manage Profile"}/>} 
          </Drawer.Screen>

          <Drawer.Screen name="Your Trips" options={{headerShown: false}}>
            {()=> <DummyScreen name={"Your Trips"}/>}
          </Drawer.Screen>

          <Drawer.Screen name="Help" options={{headerShown: false}}>
            {()=> <DummyScreen name={"Help"}/>}
          </Drawer.Screen>
                  
          <Drawer.Screen name="Settings" options={{headerShown: false}}>
            {()=> <DummyScreen name={"Settings"}/>}
          </Drawer.Screen>
          
        </Drawer.Navigator>
      </NavigationContainer>*/
      
    );
  }

export default DriverScreen

