import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import tw from "twrnc";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data=[
  {
    id:"123",
    title:"Get a Ride",
    image: "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_travelpicttaxi_1484336880-1.png",
    screen: "RiderAuthenticateScreen",
  },
  {
    id:"456",
    title:"Give a Ride",
    image:"http://www.cliniquevisionrabat.ma/wp-content/uploads/2020/08/icone-conducteur.png",
    screen:"DriverAuthenticateScreen",
},
];

const NavOptions = () => {
    const navigation = useNavigation();
  return (

    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => {
      return item.id;
    }}
    renderItem={({item}) => (
      <TouchableOpacity 
      onPress={() => {
          return navigation.navigate(item.screen);
        }}
      style= {tw`p-1 pl-5 pb-5 pt-2 bg-gray-200 m-1 w-30`}     
      >
        <View>
          <Image
          source={{ uri: item.image}}
          style={{width:80, height:80,resizeMode:"contain"}}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>
            {item.title}
          </Text>
          <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          name="arrowright"
          color="white" 
          type="antdesign"
          />
        </View>
      </TouchableOpacity>

    )}
    />
  );
};

export default NavOptions
