import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { fetchUser } from "../redux/actions/index";

import EditScreenInfo from "../Components/EditScreenInfo";
import { Text, View } from "../Components/Themed";

import firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";
import { user } from "../redux/reducer/user";
// import EditScreen from "./EditProfile";
import Navigation from "../navigation";

function ProfileScreen(props) {
  const { currentUser } = props;
  const [nameChange, setNameChange] = React.useState(currentUser.name);
  const [bioChange, setBioChange] = React.useState(currentUser.bio);
  console.log({ currentUser });
  console.log({ nameChange, bioChange });

  const updateProfile = () => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        name: nameChange,
        bio: bioChange,
      });
    Alert.alert("Changes saved!");
  };

  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.container}
    >
      <SafeAreaView
        style={{ borderWidth: 5, borderRadius: 85, borderColor: "dodgerblue" }}
      >
        <Image
          style={{ borderRadius: 75, width: 150, height: 150 }}
          source={require("../assets/santoshNew.jpeg")}
        ></Image>
      </SafeAreaView>

      <SafeAreaView>
        <SafeAreaView style={{ marginRight: 240 }}>
          <Text style={{ fontSize: 22, color: "red" }}>Email</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.box1}>
          <Text style={{ fontSize: 18 }}>{currentUser.email} </Text>
        </SafeAreaView>

        <SafeAreaView style={{ marginRight: 240, marginTop: 20 }}>
          <Text style={{ fontSize: 22, color: "red" }}>Name</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.box1}>
          <Text style={{ fontSize: 18 }}>{nameChange} </Text>
        </SafeAreaView>

        <SafeAreaView>
          <Button
            title="Edit Name"
            onPress={() =>
              Alert.prompt("Edit Name", "Enter in new Name", (nameChange) =>
                setNameChange(nameChange)
              )
            }
          />
        </SafeAreaView>

        <SafeAreaView style={{ marginRight: 260 }}>
          <Text style={[{ fontSize: 22, color: "red" }]}>Age</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.box1}>
          <Text style={[{ fontSize: 18 }]}>{currentUser.age}</Text>
        </SafeAreaView>

        <SafeAreaView style={{ marginRight: 190 }}>
          <Text style={[{ fontSize: 22, color: "red" }, { paddingTop: 20 }]}>
            Information
          </Text>
        </SafeAreaView>

        <SafeAreaView style={styles.descBox}>
          <Text style={{ fontSize: 18 }}>{bioChange} </Text>
        </SafeAreaView>

        <SafeAreaView>
          <Button
            title="Edit Bio"
            onPress={() =>
              Alert.prompt("Edit Bio", "Enter in new Bio", (bioChange) =>
                setBioChange(bioChange)
              )
            }
          />
        </SafeAreaView>

        <SafeAreaView style={{ marginTop: 60 }}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            activeOpacity={0.5}
            onPress={updateProfile}
          >
            <Text style={styles.appButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
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
    position: "absolute",
    bottom: 0,
    marginTop: 50,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.1,
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
    height: 50,
    marginTop: 40,
    alignSelf: "center",
    justifyContent: "center",
  },
  box1: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.1,
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
    height: 50,
    marginTop: 5,
    alignItems: "center",
  },
  descBox: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.1,
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
    height: 150,
    // marginTop: 40,
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
  currentUser: store.userState.currentUser,
});
export default connect(mapStateToProps, null)(ProfileScreen);
