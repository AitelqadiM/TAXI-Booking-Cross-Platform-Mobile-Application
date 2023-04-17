import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
//import NavigateCard from './NavigateCard'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PaymentScreen from '../screens/PaymentScreen'




const data = [
  {
    id: "Dacia-Logan-123",
    title: "Dacia Logan",
    image: "https://banner2.cleanpng.com/20180323/are/kisspng-taxi-logan-international-airport-noi-bai-internati-taxi-5ab54dd6784493.2510649415218313824926.jpg"
  },  
  {
    id: "Peugeot-208-456",
    title: "Peugeot 208",
    image: "https://autorentals-crete.gr/wp-content/uploads/CarRentalGallery/208-real-1.png"
  },
  {
    id: "Renault-CLIO-789",
    title: "Renault CLIO",
    image: "https://www.picng.com/upload/renault/png_renault_22753.png"
  },
];
const SURGE_CHARGE_RATE= 0.5;
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const originRider = useSelector(state=>state.nav.origin)
  const destinationRider = useSelector(state => state.nav.destination)
  const auth = getAuth();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });

  console.log(user.uid)

  const submitRequest = async () => {
 
    const docRefUser = doc(db, "riders", user.uid);
    const docSnap = await getDoc(docRefUser);
    console.log(docSnap.data())
    const userInformation = docSnap.data()
    console.log(userInformation)

    const docRef = await addDoc(collection(db, "requests"), {
      riderOrigin: originRider,
      destinationRider: destinationRider,
      riderId: userInformation.userId,
      riderName: userInformation.name,
      riderPhone: userInformation.mobile,
    });

    navigation.navigate('PaymentScreen')
  }

  return (
    
    <View style={tw`bg-white flex-grow`}>
      <View>
        <Text style={tw`text-center py-5 text-xl font-bold`}>
        Select a Choice - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList 
      data={data}
      keyExtractor={(item)=> item.id}
      renderItem={({item: {id,title,image},item})=>(
        <TouchableOpacity 
        onPress={()=> setSelected(item)}
        style={tw`flex-row justify-between items-center px-10
        ${id===selected?.id && "bg-green-300"}`}>
          <Image
          style={{
            width:70,
            height:80,
            resizeMode: "contain",
          }}
          source={{uri: image}}
          />
          <View style={tw`ml-6`}>
            <Text style={tw`text-xl font-semibold`}>
              {title}
            </Text>
            <Text >{travelTimeInformation?.duration?.text} travel time</Text>
          </View>
          <Text style={tw`text-xl ml-6`}>
            {parseInt(travelTimeInformation?.duration?.value/22)} MAD 
          </Text>
        </TouchableOpacity>
        
      )}
      />
      <View>
        <TouchableOpacity 
        disabled={!selected}
        onPress={submitRequest}
        style={tw`bg-black m-1 mb-5 py-3 rounded-full ${!selected && 'bg-white'}`}>
          <Text style={tw`text-center text-green-300 text-xl`}>My Choice is {selected?.title}
          </Text>
          <Text  style={tw`text-center text-green-300 text-xl`}>and Proceed With The Payment </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})