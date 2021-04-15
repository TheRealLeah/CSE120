import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  } from 'react-native';

import EditScreenInfo from '../Components/EditScreenInfo';
import { View } from '../Components/Themed';

import EventCreation from './EventCreation';

export default function EventScreen({ navigation }) {
  return (
    <ImageBackground source={require("../assets/background.png")}
      style={{ flex: 1 }}
    >
      <TouchableOpacity
        style={styles.appButtonContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(EventCreation)}
      >
        <Text style={styles.appButtonText}>Create Event</Text>
      </TouchableOpacity>
      
      {/* <Stack.Navigator initialRouteName="root">
        <Stack.Screen 
          name="Root" 
          component={EventCreation}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: 300,
    height: 35,
    fontSize: 20,
    color: "#02448d",
    borderBottomWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 255, 0)",
    marginLeft: 50,
  },
  textContainer: {
    color: "#02448d",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 50,
    paddingTop: 40,
  },
  signupTextContainer: {
    color: "#02448d",
    fontSize: 30,
    fontWeight: "900",
    marginLeft: 50,
    paddingTop: 40,
  },
  appButtonContainer: {
    backgroundColor: "#ffb4b0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 50,
    width: 300,
    marginTop: 80,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
  button: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: -5,
    //position: 'absolute', // add if dont work with above
  },
});
