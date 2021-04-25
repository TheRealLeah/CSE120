import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import firebase from "./../fb.js";
import Logo from "../Components/Logo";

import { Formik } from "formik";

import FormInput from "../Components/FormInput";
import FormButton from "../Components/FormButton";
import ErrorMessage from "../Components/ErrorMessage";
import { TouchableOpacity } from "react-native-gesture-handler";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class ForgotPassword extends Component {
  handlePasswordReset = async (value, actions) => {
    const { email } = value;
    try {
      Alert.alert(
        "Confirmation!",
        "Please Check your Email to Reset your Password"
      );
      await firebase.auth().sendPasswordResetEmail(email);
      this.props.navigation.na
