import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { auth } from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
//import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {REACT_APP_GOOGLE_MAPS_API_KEY} from "@env"
import { useJsApiLoader,GoogleMap,Autocomplete} from "@react-google-maps/api";
import { useDispatch, useSelector } from 'react-redux'
import { selectOrigin, setDestination,setOrigin } from '../slices/navSlice';
import RiderMapScreen from './RiderMapScreen';
import tw from "twrnc";
import NavFavourites from '../components/NavFavourites';




const MapScreen = () => {

  const dispatch = useDispatch();

  const origin = useSelector(selectOrigin);

    const navigation=useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() =>{
         navigation.replace("HomeScreen")
        })
        .catch(error => alert(error.message))
    }

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View>
      <TouchableOpacity           
        onPress={handleSignOut}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <GooglePlacesAutocomplete
        placeholder="WHERE FROM IN IFRANE?"
        styles={{
          container:{
            flex: 0,
          },
          textInput:{
            fontSize: 25,
            marginTop: 5,
            borderRadius: 10,
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '900',
          },
        }}
        onPress={(data, details = null)=>{
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          }))
          dispatch(setDestination(null))
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
      <TouchableOpacity 
      onPress={() => {
          return navigation.navigate(RiderMapScreen);
        }}
      style= {tw`p-1 pl-5 pb-5 pt-2 bg-gray-200 m-1 items-center rounded-full mt-20 border-8 border-green-300`} 
      disabled={!origin}    
      >
        <View style={tw`${!origin && "opacity-20"}`}>
          <Image
          source={{ uri: "https://icon-library.com/images/maps-icon-png/maps-icon-png-3.jpg"}}
          style={{width:250, height:250,resizeMode:"contain"}}
          />
          <Text style={tw`mt-2 text-lg font-semibold text-center underline `}>
            GO TO MAP
          </Text>
          <Icon
          style={tw`p-2 bg-black rounded-full w-40 mt-4 ml-10`}
          name="arrowright"
          color="white" 
          type="antdesign"
          />
        </View>
      </TouchableOpacity>
    </View>
    <NavFavourites/>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '100%',
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 100,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 5 ,
        fontSize: 20,
      },
      buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        marginTop: 50,
    
      },
      button: {
        backgroundColor: '#90EE90',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5 ,
        borderColor: '#90EE90',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
      },
      buttonOutlineText: {
        color: '#90EE90',
        fontWeight: '900',
        fontSize: 20,
      },
})