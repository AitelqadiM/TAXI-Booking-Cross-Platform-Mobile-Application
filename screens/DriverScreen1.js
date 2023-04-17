import { StyleSheet, Text, View ,Image,Icon} from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { selectOriginDriver, setDestinationDriver,setOriginDriver } from '../slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux'
import DriverScreen from './DriverScreen'
import { useNavigation } from '@react-navigation/native'

const DriverScreen1 = () => {

  const dispatch = useDispatch();

  const originDriver = useSelector(selectOriginDriver);
    
    const navigation=useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() =>{
         navigation.navigate("HomeScreen")
        })
        .catch(error => alert(error.message))
    }
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View>
      <TouchableOpacity           
        onPress={handleSignOut}
        style={styles.button}
        >
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
          dispatch(setOriginDriver({
            location: details.geometry.location,
            description: data.description
          }))
          dispatch(setDestinationDriver(null))
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
        debounce={300}
      />

      <TouchableOpacity
      onPress={() => {
        return navigation.navigate(DriverScreen);
      }}
      style= {tw`p-1 pl-5 pb-5 pt-2 bg-gray-200 m-1 items-center rounded-full mt-20 border-8 border-green-300`} >
        <View>
        <Image
          source={{ uri: "https://cdn3.iconfinder.com/data/icons/back-to-work-6/512/32._car_taxi_transportation_back_to_work_people_go_to_work-512.png"}}
          style={{width:250, height:250,resizeMode:"contain"}}
          disabled={!originDriver}
          />
          <Text style={tw`mt-2 text-lg font-semibold text-center underline `}>
            START WORKING
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default DriverScreen1

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