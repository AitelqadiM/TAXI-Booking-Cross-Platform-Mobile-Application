import { StyleSheet, Text, View,SafeAreaView, Keyboard } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import RideOptionsCard from './RideOptionsCard';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {

    const dispatch =useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl font-bold`}>Welcome Dear</Text>

      <View style={tw`flex-shrink`}>
          <View>
          <GooglePlacesAutocomplete
        placeholder="WHERE To?"
        styles={{
          container:{
            flex: 0,
            backgroundColor:"white"
          },
          textInput:{
            fontSize: 20,
            //marginTop: 5,
            borderRadius: 0,
            color: "black",
            backgroundColor:"#86efac",
            //justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '500',
          },
          textInputContainer:{
              paddingHorizontal:20,
              paddingBottom:0
          }
        }}
        onPress={(data, details = null)=>{
          dispatch(setDestination({
            location: details.geometry.location,
            description: data.description
          }));
          return navigation.navigate(RideOptionsCard);
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            language: "en",
            components: 'country:ma',
            types: ['(Ifrane)']
        }}

        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}//execute the search when i stop writing
      />
      
          </View>

      </View>
    <NavFavourites/> 
    <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-green-300`}>
        <TouchableOpacity style={tw`flex flex-row justify-between bg-green-300 w-24 px-4 py-3 rounded-full`}
        onPress={()=>navigation.navigate(RideOptionsCard)}>
        <Icon name="car" type="font-awesome" color="white" size={20}/>
        <Text style = {tw`text-white text-center font-bold`}>Rides</Text>
        </TouchableOpacity>    
    </View> 
    </SafeAreaView>
      
  )
}

export default NavigateCard

const styles = StyleSheet.create({})