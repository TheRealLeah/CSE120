import * as React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { floor } from "react-native-reanimated";

import EditScreenInfo from "../Components/EditScreenInfo";
import { Text, View } from "../Components/Themed";

const windowWidth = Dimensions.get("window").width;

export default function AboutScreen() {
  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={{ flex: 1, alignItems: "center" }}
    >
      <SafeAreaView style={styles.containerImage}>
        <Image
          source={require("../assets/aboutPhoto.jpeg")}
          style={{ resizeMode: "contain", width: windowWidth }}
        ></Image>
      </SafeAreaView>
      <SafeAreaView style={styles.containerText}>
        <SafeAreaView style={{ padding: 40 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "900",
              color: "dodgerblue",
              fontFamily: "Palatino",
              textAlign: "center",
              textDecorationLine: "underline",
              shadowOpacity: 0.2,
            }}
          >
            Our Vision
          </Text>
        </SafeAreaView>
        <Text
          style={{
            fontWeight: "300",
            color: "blue",
            textAlign: "center",
            shadowOpacity: 0.2,
            fontFamily: "Palatino",
          }}
        >
          {"\n\n"} Equity is the foundation of our work. {"\n\n"}From our
          engagement with donors to our investment of community resources to our
          interactions with the public, it defines who we are and informs
          everything that we do. We define equity as the presence of justice and
          fairness within the procedures, processes and distribution of
          resources by institutions or systems. We commit to equity as a core
          value and practice in order to advance our mission of connecting
          people, resources and organizations to create a thriving community for
          everyone.{"\n\n\n\n"}Visit us at {"\n"} www.unitedwaymerced.org {"\n"}
          for more information
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    // flex: 1,
    position: "absolute",
    top: 0,
    bottom: 380,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  containerText: {
    // flex: 1,
    position: "absolute",
    top: 0,
    bottom: 200,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    marginLeft: 20,
    marginRight: 20,
  },
});
