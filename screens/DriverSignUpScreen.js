import { StyleSheet, Text,Image, View,TextInput,TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
//import DriverAuthenticateScreen from './DriverAuthenticateScreen'
import {collection, getDocs, setDoc,doc, addDoc} from "firebase/firestore"
import { db } from '../firebase'
import DriverScreen from './DriverScreen';
import HomeScreen from './HomeScreen';


//import '../assets/images/signup.png';
const DriverSignUpScreen = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();
    const [type, setType] = useState();
    
    const navigation = useNavigation();
    
    const DriverSignUp = async () => {
    
       
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
      
            const docRef = await addDoc(collection(db, "drivers"), {
                name: name,
                email: email,
                mobile: mobile,
                userId: user.uid,
                type: type,
                isDriver: true
              });
            const cardocRef = await addDoc(collection(db, "Vehicules"), {
                userId: user.uid,
                type: type,
              });
            
              return navigation.navigate(DriverScreen)
        }
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={styles.mainView}>

      <View style={styles.TopView}>
         <Image style ={styles.ImageStyle} source={require('../assets/images/signup.png')} />
      </View>

      <View style={styles.BottomView}>
        <Text style={styles.Heading}>
            REGISTER
        </Text>
        <View style={styles.FormView}>
        <TextInput
                placeholder={"Full Name"}
                placeholderTextColor={"#fff"}
                style={styles.TextInput}
                onChangeText={(text) => {setName(text)}}
                value={name}
            />
            <TextInput
                placeholder={"Email Address"}
                placeholderTextColor={"#fff"}
                secureTextEntry={false}
                style={styles.TextInput}
                onChangeText={(text) => {setEmail(text)}}
                value={email}
            />
            <TextInput
                placeholder={"Mobile"}
                placeholderTextColor={"#fff"}
                secureTextEntry={false}
                style={styles.TextInput}
                onChangeText={(text) => {setMobile(text)}}
                value={mobile}
            />        
            <TextInput
                placeholder={"Car Type"}
                placeholderTextColor={"#fff"}
                style={styles.TextInput}
                onChangeText={(text) => {setType(text)}}
                value={type}
            />
            <TextInput
                placeholder={"PASSWORD"}
                placeholderTextColor={"#fff"}
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={(text) => {setPassword(text)}}
                value={password}
            />

            <TouchableOpacity style={styles.Button} onPress={DriverSignUp}>
                <Text style={styles.ButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity 
        style={styles.TextButton}
        onPress={() => {
            return navigation.navigate(HomeScreen);
          }}>
            <Text style={styles.SignUpText}>Already Have an Account!
                Sign IN
            </Text>
        </TouchableOpacity>

      </View>


    </View>
    </SafeAreaView>  
  )
}

export default DriverSignUpScreen

const styles = StyleSheet.create({
    mainView:{
        marginTop:1,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    TopView:{
        width:'100%',
        height:'15%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    BottomView:{
        width:'100%',
        height:"95%",
        backgroundColor:"#008000",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    ImageStyle:{
        marginTop:30,
        width:'20%',
        resizeMode:'contain',

    },
    Heading:{
        color:'#fff',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign:'center',
    },
    TextInput:{
        width:'90%',
        borderWidth:1,
        borderColor: '#fff',
        height:60,
        borderRadius:10,
        paddingLeft:5,
        marginTop: 30,
        textAlign:'center',
        fontSize:20,
        color:'#fff',


    },
    FormView:{
        width: '100%',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        //marginTop: 10,
    },
    Button:{
        width: '90%',
        color: '#000',
        height:60,
        borderRadius:10,
        marginTop: 20,
        backgroundColor:'#fff',
        display:'flex',
        justifyContent:'center',
        marginTop:20,
        alignItems:'center',
        borderRadius:10,

    },
    ButtonText:{
        fontWeight:'bold',
        fontSize:15
    },
    TextButton:{
      width:'100%',
      display:'flex',
      alignItems:'center',
      marginTop:20,  
    },
    SignUpText:{
      color: '#fff',  
    }
})