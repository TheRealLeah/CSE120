import * as React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";

import EditScreenInfo from "../Components/EditScreenInfo";
import { Text, View } from "../Components/Themed";

export default function NotificationScreen() {
  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.background}
    >
      <View style={styles.orangeView} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  orangeView: {
    flex: 1,
    width: 300,
    height: 10,
    backgroundColor: "#ff6623",
  },
});
