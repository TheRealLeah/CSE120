import * as React from "react";
import { StyleSheet, ImageBackground, Dimensions } from "react-native";
import OrangeNotificationBanner from "../Components/OrangeNotificationBanner";

import { Text, View } from "../Components/Themed";

export default function NotificationScreen() {
  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.background}
    >
      <OrangeNotificationBanner />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
});