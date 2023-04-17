import { StyleSheet,KeyboardAvoidingView,Image, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RiderSignUpScreen from './RiderSignUpScreen';
import { db } from '../firebase'

const RiderAuthenticateScreen = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if (user){
        navigation.navigate("MapScreen")
      }
    })
    return unsubscribe
  },[])

  const handleLogin = ()  => {
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log('Logged in With',user);
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding">
      
      <Image 
        style={{
        width: 150, 
        height: 150, 
        resizeMode:"contain",
        alignItems:"center",
        }}
        source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1791/1791961.png",
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
          return navigation.navigate(RiderSignUpScreen);
        }}
        style={[styles.button, styles.buttonOutline]}
        >
          <Text style = {styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    
  )
}

export default RiderAuthenticateScreen

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
