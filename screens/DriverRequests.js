import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector} from 'react-redux';
import { setDestinationDriver,selectDestinationDriver } from '../slices/navSlice';


const DriverRequests = () => {
const [request,setrequest]=useState(false);
const [loading,setLoading]=useState(false);
const navigation = useNavigation();
const dispatch =useDispatch();
const destinationDriver = useSelector(selectDestinationDriver);


const getrequest =async () =>{
    setLoading(true)

    const docRef = await doc(db, "requests", "l6KMAgpPrnPjafNY4eK9");
    const docSnap = await getDoc(docRef);
    console.log('test')
    setLoading(false)
    setrequest(docSnap.data())
}
useEffect(() => {
    getrequest()
    
    

  },[]);
console.log(request)
if (loading) {
    return (<SafeAreaView style={tw`h-full bg-green-300`}>

    <View style={tw`bg-green-200 rounded-full`}>
        <Text style={tw`text-xl font-bold text-center mt-56`}>We are fetching the last request ...</Text>
    </View>

  </SafeAreaView>
    )
}

  return (

    
      
    <SafeAreaView style={tw`h-full bg-white`}>
        <View style={styles.mainView}>

        <View style={styles.TopView}>
            <Text style={tw`text-3xl font-bold text-center mt-5`}>Actual Requests</Text>
        </View>
        <View style={styles.BottomView}>
        {!request ? null :    
            <View>
                <Text style={tw` text-center text-2xl font-bold
                text-white m-4`}> Rider Information </Text>
                <Text style={tw`m-2 text-lg font-semibold`}>Full name : {request.riderName}</Text>
                <Text style={tw`m-2 text-lg font-semibold`}>Phone Number : {request.riderPhone}</Text>
                <Text style={tw`m-2 text-lg font-semibold`}>Destination : {request.destinationRider.description}</Text>
                <Text style={tw`m-2 text-lg font-semibold`}>Pick Up Location : {request.riderOrigin.description}</Text>
            </View>
            }
        <View style={tw`flex-row items-center m-10 mt-4`}> 

        <TouchableOpacity 
        style={tw`p-1 pl-5 pr-5 pb-5 pt-5 bg-white m-5 rounded-full`}
        
        onPress={()=> {
            dispatch(setDestinationDriver({
                location: request.riderOrigin.location,
                description: request.riderOrigin.description
            }));
            return navigation.navigate('DriverRiderMap');
          }}>
              
            <Text style={tw`mt-2 text-lg font-semibold`}> Accept</Text>
                <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="check"
            color="white" 
            type="antdesign"
            />
        </TouchableOpacity>

        <TouchableOpacity 
        style={tw`p-1 pl-5 pr-5 pb-5 pt-5 bg-red-400 m-5 rounded-full`}
        onPress={() => {
            return navigation.goBack();
          }}>
            <Text style={tw`mt-2 text-lg font-semibold`}> Refuse</Text>
                <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="close"
            color="white" 
            type="antdesign"
            />
        </TouchableOpacity>

        </View>

        </View>

        </View>
    </SafeAreaView>
  )
}

export default DriverRequests

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
        height:'10%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    BottomView:{
        width:'100%',
        height:"100%",
        backgroundColor:"#2ECC71",
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