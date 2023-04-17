import { StyleSheet,KeyboardAvoidingView, Text, View, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DriverSignUpScreen from './DriverSignUpScreen';
import DriverScreen from './DriverScreen';
import DriverScreen1 from './DriverScreen1';

const DriverAuthenticateScreen = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if (user){
        navigation.navigate(DriverScreen1)
      }
    })
    return unsubscribe
  },[])

  const handleLogin = ()  => {
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log('Logged in With',user.email);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">

        <Image 
        style={{
        width: 200, 
        height: 200, 
        marginBottom: 20,
        resizeMode:"contain",
        alignItems:"center",
        }}
        source={{
            uri: "https://freepikpsd.com/file/2020/03/Taxi-Driver-PNG-File.png",
        }}/>

      <View style={StyleSheet.inputContainer}>
        <TextInput
        placeholder="Email"
        value= {email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        value= {password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
        >
          <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
          return navigation.navigate(DriverSignUpScreen);
        }}
        style={[styles.button, styles.buttonOutline]}
        >
          <Text style = {styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default DriverAuthenticateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
