import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import "firebase/firestore";

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      contactinfo: "",
    };
   // this.onCreation = this.onCreation.bind(this);
  }

  /*onCreation() {
    const { name, description, location, time, contactinfo } = this.state;
    firebase
      .auth()
      .(name, description, location, time, contactinfo)
      .then((result) => {
        firebase
          .firestore()
          .collection("events")
          .doc(firebase.auth().currentUser.uid)
          .set({ name: name, description: description, location: location, time: time, contactinfo: contactinfo })
          .then()
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  }*/

  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <Text style={styles.eventTextContainer}>Create Event</Text>
          <Text style={styles.textContainer}>Event Name</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(name) => this.setState({ name })}
          ></TextInput>

          <Text style={styles.textContainer}>Email</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(email) => this.setState({ email })}
          ></TextInput>

          <Text style={styles.textContainer}>Event Description</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(description) => this.setState({ description })}
          ></TextInput>

          <Text style={styles.textContainer}>Contact Information</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(contactinfo) => this.setState({ contactinfo })}
          ></TextInput>

          <TouchableOpacity
            style={styles.appButtonContainer}
            activeOpacity={0.5}
            onPress={() => this.onCreation()}
          >
            <Text style={styles.appButtonText}>Create Event</Text>
          </TouchableOpacity>
          
        </SafeAreaView>
      </ImageBackground>
    );
  }
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
  eventTextContainer: {
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
});

export default EditProfile;