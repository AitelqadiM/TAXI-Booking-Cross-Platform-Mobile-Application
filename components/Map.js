import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector, useDispatch  } from 'react-redux';
import {selectDestination, selectOrigin,setTravelTimeInformation} from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions'

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(["origin","destination"],
        {edgePadding:{top:50, right:50,bottom:50,left:50},
        });
    },[origin, destination]);

    useEffect(()=>{

        const getTravelTime = async () => {
            if (!origin || !destination)return;
            fetch(
                `https://maps.googleapis.com/maps/api/distancematrix/json?
                units=imperial&origins=${origin.description}&destinations=${
                destination.description}&key=AIzaSyDwU4gX_M6IcVD-KBnr7-GQl6wQiZg964I`)
                .then((res)=>res.json())
                .then(data=>{
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
              })  
        };

        getTravelTime();
    },[origin,destination,process.env.REACT_APP_GOOGLE_MAPS_API_KEY])

  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    //mapType="hybrid"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    }}
    >
        {origin && destination && (
            <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="green"
            />
        )}

        {origin?.location && 
        (
            <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng, 
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            />
        )}
        {destination?.location && 
        (
            <Marker
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng, 
            }}
            title="destination"
            description={destination.description}
            identifier="destination"
            />
        )}
        <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            image={{uri:'https://ramservis.az/front/images/middlecar.png'}}
            title="Driver 1"
        />

    </MapView>
    
  )
}

export default Map