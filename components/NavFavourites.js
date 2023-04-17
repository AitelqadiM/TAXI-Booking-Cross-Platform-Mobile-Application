import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const data=[
    {
        id: "123",
        icon: "home",
        location: "home",
        destination: "Aui Maingate, Ifrane, Morocco"
    },
    {
        id: "456",
        icon: "cafe",
        location: "Cafe",
        destination: "L'empreinte, Ifrane, Morocco"
    },
];


const NavFavourites = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    ItemSeparatorComponent={()=>(
        <View style={[tw`bg-green-300`,{ height: 1}]} />
    )}
    renderItem={({item: {location, destination,icon }})=>(
        <TouchableOpacity style={tw`flex-row items-center p-2`}>
            <Icon
            style={tw`mr-4 rounded-full bg-green-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>

        </TouchableOpacity>
    )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})