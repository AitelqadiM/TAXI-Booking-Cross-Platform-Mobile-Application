import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector, useDispatch  } from 'react-redux';
import {selectDestinationDriver, selectOriginDriver,setTravelTimeInformationDriver} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions'
import { useNavigation } from '@react-navigation/native'

const MapDriver = () => {

  const originDriver = useSelector(selectOriginDriver);
  const destinationDriver = useSelector(selectDestinationDriver);
  const mapRefDriver = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(()=>{
    if (!originDriver || !destinationDriver) return;

      mapRefDriver.current.fitToSuppliedMarkers(["originDriver","destinationDriver"],
      {edgePadding:{top:50, right:50,bottom:50,left:50},
      });
  },[originDriver, destinationDriver]);
  useEffect(()=>{
  const getTravelTime = async () => {
    if (!originDriver || !destinationDriver)return;
    fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?
        units=imperial&origins=${originDriver.description}&destinations=${
        destinationDriver.description}&key=AIzaSyDwU4gX_M6IcVD-KBnr7-GQl6wQiZg964I`)
        .then((res)=>res.json())
        .then(data=>{
            dispatch(setTravelTimeInformationDriver(data.rows[0].elements[0]));
      })  
};

getTravelTime();
},[originDriver, destinationDriver,process.env.REACT_APP_GOOGLE_MAPS_API_KEY])



  return (
    <MapView
    ref={mapRefDriver}
    style={tw`flex-1`}
    initialRegion={{
      latitude: originDriver.location.lat,
      longitude: originDriver.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    //showsUserLocation={true}
    >
        {originDriver && destinationDriver && (
          <MapViewDirections
          originDriver={originDriver.description}
          destinationDriver={destinationDriver.description}
          apikey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="green"
          />
        )}      
        {originDriver?.location && 
          (
              <Marker
              coordinate={{
                latitude: originDriver.location.lat,
                longitude: originDriver.location.lng, 
              }}
              title="My Driver Location"
              description={originDriver.description}
              identifier="originDriver"
              />
          )}
        {destinationDriver?.location && 
        (
            <Marker
            coordinate={{
                latitude: destinationDriver.location.lat,
                longitude: destinationDriver.location.lng, 
            }}
            title=" Pick Up Of Client"
            description={destinationDriver.description}
            identifier="destinationDriver"
            />
        )}
          
        </MapView>
  )
}

export default MapDriver

const styles = StyleSheet.create({})