import React, { Component } from 'react'

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
  } from "react-native";

import firebase from "firebase";
import Logo from "../Components/Logo";

export class EditPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          password: "",
        };
        this.onPassChange = this.onPassChange.bind(this);
      }

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
            />
          </SafeAreaView>
        {/* </DismissKeyboard> */}
      </ImageBackground>
        );
    }
}

export default EditPassword
