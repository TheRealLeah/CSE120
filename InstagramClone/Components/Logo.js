import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";

export default function Logo({ navigation }) {
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/UWMClogo.jpeg")}
        style={styles.logoContainer}
      ></Image>
      <Text style={styles.textContainer}>Volunteer Here</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  textContainer: {
    color: "#02448d",
    fontSize: 20,
    fontWeight: "500",
  },
});
