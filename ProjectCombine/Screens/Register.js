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

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({ email: email, password: password, name: name })
          .then()
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <Text style={styles.signupTextContainer}>Sign Up</Text>
          <Text style={styles.textContainer}>Email</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(email) => this.setState({ email })}
          ></TextInput>

          <Text style={styles.textContainer}>Password</Text>
          <TextInput
            style={styles.textInputContainer}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          ></TextInput>

          <Text style={styles.textContainer}>Name</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(name) => this.setState({ name })}
          ></TextInput>

          <Text style={styles.textContainer}>Account Type</Text>
          {/* Need to find some way of implementing check boxes... */}

          <TouchableOpacity
            style={styles.appButtonContainer}
            activeOpacity={0.5}
            onPress={() => this.onSignUp()}
          >
            <Text style={styles.appButtonText}>Sign Up</Text>
          </TouchableOpacity>
          {/* <Button onPress={() => this.onSignUp()} title="Sign Up" /> */}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default Register;

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
});
