import fb from "../fb";
import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";

import { Text, View } from "../Components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import LoadEventData from "../Components/myEvents";
import { eventdata } from "../Components/myEvents";

var name;
var desc;
var contactinfo;
var location;
var time;
var eventID;
var OrgID;
var isVolunteering = false;
export default function EventDetails({ route, navigation }) {
  const [volunteer, setVolunteer] = useState("Volunteer");
  LoadEventData();
  //console.log("Params: ", route.params);
  const { item } = route.params;
  name = item[0];
  desc = item[1];
  contactinfo = item[2];
  location = item[3];
  time = item[4];
  eventID = item[5];
  OrgID = item[6];
  //console.log("Name: ", name);
  // if (eventdata.indexOf(eventID) > -1) {
  //   buttonname = "UnVolunteer";
  // } else {
  //   buttonname = "Volunteer";
  // }
  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.background}
    >
      <Text style={styles.title}> {name} </Text>

      <TouchableOpacity
        style={styles.button}
        //onPress={() => console.log("PRESSED ON VOLUNTEER")}
        onPress={() => {
          if (isVolunteering) {
            setVolunteer("Volunteer");
            addEvent();
          } else {
            setVolunteer("Unvolunteer");
            addEvent();
          }
        }}
      >
        <Text style={styles.buttontext}>{volunteer}</Text>
        {/* <Text style={styles.buttontext}>{buttonname}</Text> */}
      </TouchableOpacity>
      <View style={styles.box}>
        <ScrollView>
          <Text style={styles.time}>Time: {time} </Text>
          <Text style={styles.Location}>Location: {location} </Text>
          <Text style={styles.contact}>Contact: {contactinfo} </Text>
          <Text style={styles.desc}>Description: {desc} </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  background: {
    flex: 1,
    //alignItems: "center",
  },
  button: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.1,
    borderRadius: 10,
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.6,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.95,
    marginTop:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.75,
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#E6FEFF",
    shadowOpacity: 0.1,
    borderRadius: 10,
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.1,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.6,
    marginTop: 10,
    alignSelf: "center",
    overflow: "scroll",
  },
  desc: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "left",
  },
  contact: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "left",
  },
  Location: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "left",
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "left",
  },
  buttontext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    textAlignVertical: "center",

    marginTop: 8,
  },
});

function addEvent() {
  var db = fb.firestore();
  db.collection("users")
    .doc(fb.auth().currentUser.uid)
    .get()
    .then((doc) => {
      var temp = doc.data();
      var data = temp["myEvents"];
      //console.log("TESTST",data);

      if (data.indexOf(eventID) > -1) {
        // check if user already had this event
        // remove events from users myEvents
        isVolunteering = false;
        // Alert.alert("You have removed: ", name);
        db.collection("users")
          .doc(fb.auth().currentUser.uid)
          .update({
            myEvents: fb.firestore.FieldValue.arrayRemove(eventID),
          });
      } else {
        // add this event to users myEvents
        isVolunteering = true;
        // Alert.alert("You have Signed Up For: ", name);
        db.collection("users")
          .doc(fb.auth().currentUser.uid)
          .update({
            myEvents: fb.firestore.FieldValue.arrayUnion(eventID),
          })
          .then(() => {
            db.collection("notifications").add({
              id: OrgID,
              message: "Someone has added themselves to " + name,
              time: +new Date(),
            });
          });
      }
    });
}
