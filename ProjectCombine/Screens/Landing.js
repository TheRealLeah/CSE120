import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import Logo from "../Components/Logo.js";

export default function Landing({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.styleContainer}
    >
      <Logo />
      <TouchableOpacity
        style={styles.appButtonContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.appButtonContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.appButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  appButtonContainer: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.25,
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
});
