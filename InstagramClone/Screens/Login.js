import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
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
          <Text style={styles.signupTextContainer}>Sign In</Text>
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

          <TouchableOpacity
            style={styles.appButtonContainer}
            activeOpacity={0.5}
            onPress={() => this.onLogin()}
          >
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
          {/* <Button onPress={() => this.onSignUp()} title="Sign Up" /> */}
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
  signupTextContainer: {
    color: "#02448d",
    fontSize: 30,
    fontWeight: "900",
    marginLeft: 50,
    paddingTop: 40,
  },
  appButtonContainer: {
    backgroundColor: "#ef4638",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 50,
    width: 300,
    marginTop: 80,
  },
  appButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "800",
    alignSelf: "center",
  },
});

export default Login;
