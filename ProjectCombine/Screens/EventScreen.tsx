import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";

import { Text } from "../Components/Themed";

import firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";

function EventScreen(props) {
  const { currentUser } = props;
  const [nameChange, setNameChange] = React.useState(currentUser.events.name);
  const [descChange, setDescChange] = React.useState(currentUser.events.description);
  const [timeChange, setTimeChange] = React.useState(currentUser.events.time);
  const [loChange, setLocationChange] = React.useState(currentUser.events.location);
  const [contactChange, setContactChange] = React.useState(currentUser.events.contactinfo);
  console.log({ currentUser });
  console.log({ nameChange, descChange });

  const updateEvents = () =>
    firebase
      .firestore()
      .collection("events")
      .doc(firebase.auth().currentUser.uid)
      .update({
        name: nameChange,
        description: descChange,
        location: loChange,
        time: timeChange,
        contactinfo: contactChange,
      });

  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.container}
    >
      
      <Text style={styles.box}>Name: {currentUser.name} </Text>

      <SafeAreaView>
        <Button
          title="Add Event Name"
          onPress={() =>
            Alert.prompt("Add Event Name", "Enter Event Name", (nameChange) =>
              setNameChange(nameChange)
            )
          }
        />
      </SafeAreaView>

      <Text style={styles.box}>Description: {currentUser.description} </Text>

      <SafeAreaView>
        <Button
          title="Add Event Description"
          onPress={() =>
            Alert.prompt("Add Event Description", "Enter Description", (descChange) =>
              setDescChange(descChange)
            )
          }
        />
      </SafeAreaView>

      <TouchableOpacity
        style={styles.appButtonContainer}
        activeOpacity={0.5}
        onPress={updateEvents}
      >
        <Text style={styles.appButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerInfo: {
    marginTop: 10,
  },
  appButtonContainer: {
    backgroundColor: "#ffb4b0",
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
    marginTop: 30,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.25,
    borderRadius: 10,
    paddingVertical: 10,

    width: 300,
    height: 50,
    marginTop: 40,
    alignSelf: "center",
  },
  descBox: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.25,
    borderRadius: 10,
    paddingVertical: 10,

    width: 300,
    height: 250,
    marginTop: 40,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser.events,
});
export default connect(mapStateToProps, null)(EventScreen);
