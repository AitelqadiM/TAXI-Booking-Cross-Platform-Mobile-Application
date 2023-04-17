import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
//import { CreditCardInput } from 'react-native-credit-card-input-view';
//import {CreditCardInput} from 'react-native-payment-card';
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import RiderRequest from './RiderRequest'
import { Icon } from 'react-native-elements';
import PayCreditCard from './PayCreditCard';
import RiderMapScreen from './RiderMapScreen'


const PaymentScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-green-300 h-full items-center`}>

      <TouchableOpacity
          style= {tw` p-1 pl-5 pb-5 pt-5 bg-white m-1 border-2`}
          onPress={()=>navigation.navigate(RiderRequest)}
          >
            <View>
              <Image
              source={{ uri: 'https://www.freeiconspng.com/uploads/cash-payment-icon-5.png'}}
              style={{width:200, height:200,resizeMode:"contain"}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>
                Pay In Cash
              </Text>
              <Icon
                style={tw`p-2 bg-green-300 rounded-full w-10 mt-4`}
                name="arrowright"
                color="white" 
                type="antdesign"
                />
            </View>
            
      </TouchableOpacity>

      <TouchableOpacity
      style= {tw`  p-1 pl-5 pb-5 pt-5 bg-white m-1 border-2`}
      onPress={()=>navigation.navigate(PayCreditCard)}>

            <View>
              <Image
              source={{ uri: 'https://www.freeiconspng.com/uploads/payment-methods-card-icon-20.png'}}
              style={{width:200, height:200,resizeMode:"contain"}}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>
                Pay by Credit Card
              </Text>
              <Icon
                style={tw`p-2 bg-green-300 rounded-full w-10 mt-4`}
                name="arrowright"
                color="white" 
                type="antdesign"
                />
            </View>

      </TouchableOpacity>
      
      <TouchableOpacity
      style= {tw`  p-1 pl-20 pr-20 pb-5 pt-5 bg-white border-red-700 rounded-full border-4`}
      onPress={()=>navigation.navigate(RiderMapScreen)}
      >

        <Text style={tw`text-lg text-center font-bold`}>
                  Cancel Request
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})