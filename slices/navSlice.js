import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    originDriver: null,
    destinationDriver: null,
    travelTimeInformationDriver: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setOriginDriver: (state, action) => {
            state.originDriver = action.payload;
        },
        setDestinationDriver: (state, action) => {
            state.destinationDriver = action.payload;
        },
        setTravelTimeInformationDriver: (state, action) => {
            state.travelTimeInformationDriver = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation,setOriginDriver, setDestinationDriver, setTravelTimeInformationDriver } = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectOriginDriver = (state) => state.nav.originDriver;
export const selectDestinationDriver = (state) => state.nav.destinationDriver;
export const selectTravelTimeInformationDriver = (state) => state.nav.travelTimeInformationDriver;

export default navSlice.reducer;
