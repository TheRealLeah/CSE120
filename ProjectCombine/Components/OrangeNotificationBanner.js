import * as React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { Text, View } from "../Components/Themed";

export default function OrangeNotificationBanner() {
  return (
    <View style={styles.orangeView}>
      <View style={styles.topLine}></View>
      <Text style={styles.textContainer}>Activity</Text>
      <View style={styles.underLine}></View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  orangeView: {
    flex: 0.075,
    width: windowWidth,
    height: 10,
    backgroundColor: "#ffc957",
    alignItems: "center",
  },
  textContainer: {
    color: "#ff712a",
    fontSize: 18,
    fontWeight: "500",
    padding: 30,
  },
  underLine: {
    width: windowWidth / 4,
    height: 2,
    backgroundColor: "tomato",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  topLine: {
    width: windowWidth,
    height: 8,
    backgroundColor: "#75a9f9",
    alignItems: "center",
    position: "absolute",
  },
});
