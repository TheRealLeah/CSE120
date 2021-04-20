import firebase from "firebase";
import * as React from "react";
import { StyleSheet, ImageBackground, Dimensions, Alert } from "react-native";

import { Text, View } from "../Components/Themed";

var data;
var name;

export default function HomeScreen() {
  LoadData(function () {
    name = data["name"];
    console.log("After LoadData():", name);
  });

  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.container}
    >
      <View style={styles.box}>
        <Text style={styles.name}>Name: {name} </Text>
        <Text style={styles.desc}>Desc: </Text>
      </View>
      <View style={styles.separator} lightColor="#6F91CF" darkColor="#6F91CF" />
    </ImageBackground>
  );
}

async function LoadData(_callback) {
  //console.log("Before Load:");
  var db = firebase.firestore().collection("events");
  await db.get().then((querySnapshot) => {
    // console.log("Event Size:", querySnapshot.size);

    querySnapshot.forEach((documentSnapshot) => {
      //console.log("Event ID:",documentSnapshot.id, documentSnapshot.data());
      data = documentSnapshot.data();

      // console.log("Event Name:", data['name']);
      // console.log("Event Desc:", data['desc']);
      // console.log("Got Data:");
    });
  });
  //name = data['name'];
  // console.log("After Load:", name);
  _callback();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 100,
    paddingTop: 10,
  },
  desc: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 100,
    paddingTop: 10,
  },
  separator: {
    marginVertical: 10,
    height: 10,
    width: "95%",
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#E6FEFF",
    shadowOpacity: 0.25,
    borderRadius: 10,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    //marginLeft: 50,
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.1,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.88,
    marginTop: 40,
    alignSelf: "center",
    //opacity: .5,
    marginVertical: Dimensions.get("screen").height,
  },
});
