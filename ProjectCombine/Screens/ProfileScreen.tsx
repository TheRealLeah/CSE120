// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { fetchUser } from '../redux/actions/index'

import EditScreenInfo from '../Components/EditScreenInfo';
import { Text, View } from '../Components/Themed';

import firebase from 'firebase'
require('firebase/firestore')
import { connect } from 'react-redux'
import { user } from '../redux/reducer/user';

function ProfileScreen(props) {
  const { currentUser } = props;
  console.log({currentUser})

  return (
    <ImageBackground source={require("../assets/background.png")} style={styles.container} >
      {/* <Text style={styles.containerInfo}>{currentUser.name}</Text>
      <Text style={styles.containerInfo}>{currentUser.email}</Text> */}
      <Text style={styles.box} >Name: {currentUser.name} </Text> 
      <Text style={styles.box} >Email: {currentUser.email} </Text>
      <Text style={styles.box} >Bio: {currentUser.bio} </Text>
    </ImageBackground>

    // <View style={styles.container}>
    //   <Text style={styles.title}>Profile</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   {/* <EditScreenInfo path="/screens/ProfileScreen.tsx" /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerInfo: {
    marginTop: 10
  },
  box: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.25,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 50,
    width: 300,
    height: 70,
    marginTop: 40,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
})
export default connect(mapStateToProps, null)(ProfileScreen);