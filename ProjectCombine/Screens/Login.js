import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import firebase from "firebase";
import Logo from "../Components/Logo";
import Forgot from "../Screens/ForgotPassword"

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
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
      console.log(email)
  }

  goToForgotPassword = () => this.props.navigation.navigate(Forgot)

  
  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={{ flex: 1 }}
      >
        {/* <DismissKeyboard> */}
          <SafeAreaView>
            <Logo></Logo>
            <Text style={styles.signupTextContainer}>Sign In</Text>
            <Text style={styles.signupTextContainer1}>
              Hi there! Nice to see you again.
            </Text>

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
              onPress={() => this.onSignIn()}
            >
              <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>

            {/* <Button onPress={() => this.onSignIn()} title="Sign In" /> */}

            <SafeAreaView style={{ marginTop: 40 }} />
            <Button
              title="Forgot Password?"
              color="cornflowerblue"
              style={{ paddingHorizontal: 20 }}
              // onPress={() => Alert.prompt("Forgot Password", "Enter in an email address", (email) => this.setState({ email }))}
              onPress={() => this.goToForgotPassword}
            />
          </SafeAreaView>
        {/* </DismissKeyboard> */}
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
    color: "cornflowerblue",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 50,
    paddingTop: 40,
  },
  signupTextContainer: {
    color: "cornflowerblue",
    fontSize: 30,
    fontFamily: "Verdana",
    fontWeight: "900",
    marginLeft: 50,
    paddingTop: 40,
  },
  signupTextContainer1: {
    color: "cornflowerblue",
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 50,
    paddingTop: 20,
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

export default Login;
