// import * as React from 'react';
import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Image, ImageBackground, Button, TouchableOpacity, TextInput } from "react-native";
import { fetchUser } from "../redux/actions/index";

import EditScreenInfo from "../Components/EditScreenInfo";
import { Text, View } from "../Components/Themed";

import firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";
import { user } from "../redux/reducer/user";
import EditScreen from "./EditProfile";
import Navigation from "../navigation";

function ProfileScreen(props) {
  const { currentUser } = props;
  const [nameChange, setNameChange] = React.useState(currentUser.name);
  const [bioChange, setBioChange] = React.useState(currentUser.bio);
  console.log({ currentUser });
  console.log({ nameChange, bioChange });

  const updateProfile = () => firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).update({
    name: nameChange,
    bio: bioChange,
  });

  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.container}
    >
      <Text style={styles.box}>Email: {currentUser.email} </Text>
      <TextInput style={styles.box} placeholder={currentUser.name} onChangeText={nameChange => setNameChange(nameChange)}/>
      <Text style={styles.box}>Age: {currentUser.age}</Text>
      <TextInput style={styles.descBox} placeholder={currentUser.bio} onChangeText={bioChange => setBioChange(bioChange)}/>
      <TouchableOpacity
          style={styles.appButtonContainer}
          activeOpacity={0.5}
          onPress={ updateProfile }
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
    marginTop: 80,
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
  image: {
    flex: 1,
    aspectRatio: 1 / 1
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
export default connect(mapStateToProps, null)(ProfileScreen);
