# Welcome to the Future of Transportation!

## Overview
This cross-platform taxi booking app is the most innovative solution for transportation in the 21st century. Developed with the latest technology, this app combines convenience, speed, and safety to create the ultimate travel experience.

## Features
### Riders
- Register/Authenticate:
  - Add/Delete Account
  - Sign In/Sign Out
  - Modify Account Information
  - View Information
- Request Ride:
  - Add/Cancel Request
  - Set Pickup/Destination Location
  - Select Cab Type
  - Select Payment Method
  - Notify Drivers Nearby
- Confirm Booking:
  - Accept/Refuse Request
  - Start/Finish Ride
  - Complete Payment

### Drivers
- Register/Authenticate:
  - Request Registration/Delete Account
  - Sign In/Sign Out
  - Modify Account Information
  - View Profile Information
  - Start Working (Set available)
  - Add Vehicle
  - Modify Vehicle Information
- Confirm Booking:
  - Accept/Refuse Request
  - Start/Finish Ride
  - Complete Payment

## Technology Used
### Front-end:
- React Native
- Tailwind CSS
- Redux
- JavaScript

### Back-end:
- Google Maps APIs
- Firebase (Firestore)
- Node.js

## Setup and Installation
To install and run this app on your device, please follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Connect to a Firebase project and create a Firestore database.
4. Create a Google Maps API key and enable the Maps SDK for Android and iOS.
5. Create a `.env` file with the following variables:
                * FIREBASE_API_KEY: Your Firebase API key
                * FIREBASE_AUTH_DOMAIN: Your Firebase authentication domain
                * FIREBASE_PROJECT_ID: Your Firebase project ID
                * GOOGLE_MAPS_API_KEY: Your Google Maps API key
6. Run `npm start` to start the development server.
7. Use an emulator or connect a physical device to test the app.

## Future Development
We are constantly working on improving this app and adding new features to enhance the user experience. Some of the features we are currently working on include:

- Multi-language support
- Enhanced driver rating system
- Integration with third-party payment systems
