import React from "react";
import { View, Text, Pressable } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
//import { Auth } from 'aws-amplify';
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
    const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: 'green',padding:15}}>

            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{
                    backgroundColor:'#fff',
                    width: 60,
                    height:60,
                    borderRadius: 30,
                    marginVertical:10,
                    marginRight:10,
                }}/>
                <View>
                    <Text style = {{color:'white',fontSize:20}}>  Taxi First Driver</Text>
                    <Text style = {{color:'gold',fontSize:24}}>  5.00  ☆</Text>
                </View>

            </View>

            <View style={tw`border-t-2 border-b-2 border-white p-2`}>
                <TouchableOpacity onPress={()=>{console.warn('Rani Sekraaaaaaaaaana')}}>
                    <Text style={{color: '#fff',paddingVertical:5}}>MESSAGES</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>{console.warn('Rani Sekraaaaaaaaaana')}}>
                <Text style={{color: '#fff',paddingVertical:5}}> Do More With Your Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{console.warn('Rani Sekraaaaaaaaaana')}}>
                <Text style={{color: '#fff'}}> Make Money Driving</Text>
            </TouchableOpacity>
        </View>
 
        <DrawerItemList{...props}/>
    </DrawerContentScrollView >
  );
};

export default CustomDrawer;