import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input-view";
import { CardView } from "react-native-credit-card-input-view";
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RiderRequest from './RiderRequest';
import { useNavigation } from '@react-navigation/native';

const onChange = (form) => { console.log(form) }

const PayCreditCard = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
    <View style={tw`flex h-1/2 content-center items-center my-32 `}>
        <CreditCardInput onChange={onChange} />
    </View>
    <TouchableOpacity
        style={tw`bg-green-300 rounded-full`}
        onPress={()=>navigation.navigate(RiderRequest)}>
          <Text style={tw` m-5 text-black text-center font-bold`}> Pay </Text>
    </TouchableOpacity>
    </SafeAreaView>


    
  )
}

export default PayCreditCard

const styles = StyleSheet.create({})