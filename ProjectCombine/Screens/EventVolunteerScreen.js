//LEAHS PAGE
import React, { Component } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
//importing flatlsist (I want to use a flatlist to store everything.)
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
class EventVolunteerScreen extends Component {
  state = {};

  onEventAdded = (event) => {};

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.container}
      >
        <Text style={{ fontSize: 30 }}>
          This is the event page for volunteers
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EventVolunteerScreen;
