import React, { useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";
// import Divider from "react-native-elements";
import OrangeBanner from "../Components/OrangeBanner";

import firebase from "firebase";

const windowWidth = Dimensions.get("window").width;
let data;
let name;

function Item({ name, time }) {
  return (
    <SafeAreaView style={x.listItem}>
      <Text>{name}</Text>
      <Text>{time}</Text>
    </SafeAreaView>
  );
}

const notifications = [
  {
    id: "1",
    name: "You've been added to {name} event!",
    time: "31 mins ago",
  },
  {
    id: "2",
    name: "You've been added to " + name + " event!",
    time: "6 hrs ago",
  },
];
const x = StyleSheet.create({
  listItem: {
    backgroundColor: "cornflowerblue",
    flexDirection: "column",
    width: windowWidth,
    borderColor: "#a8c6fa",
    borderWidth: 4,
  },
});

export default function NotificationScreen() {
  LoadData(function () {
    name = data["name"];
    // console.log("After LoadData():", name);
  });

  return (
    <ImageBackground
      source={require("../assets/background2.png")}
      style={styles.background}
    >
      <OrangeBanner title="Activity" />
      <FlatList
        data={notifications}
        renderItem={({ item }) => <Item name={item.name} time={item.time} />}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
});

async function LoadData(_callback) {
  //console.log("Before Load:");
  var db = firebase.firestore().collection("notifications");
  await db.get().then((querySnapshot) => {
    // console.log("Event Size:", querySnapshot.size);

    querySnapshot.forEach((documentSnapshot) => {
      // console.log("Event ID:", documentSnapshot.id, documentSnapshot.data());
      data = documentSnapshot.data();

      // console.log("Event Name:", data['name']);
      // console.log("Event Desc:", data['desc']);
      // console.log("Got Data:");
      console.log("Got Data:", data);
    });
  });
  // name = data["name"];
  // console.log("After Load:", name);
  _callback();
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   ImageBackground,
//   FlatList,
//   SafeAreaView,
//   Text,
//   Dimensions,
// } from "react-native";
// import { Divider } from "react-native-elements";
// import OrangeBanner from "../Components/OrangeBanner";

// import moment from "moment";

// const windowWidth = Dimensions.get("window").width;

// // const notificationsCollection = firebase
// //   .firestore()
// //   .collection("notifications")
// //   .doc("v6wBmuPpaIuEx0ODlarQ")
// //   .get();

// const notifications = [
//   {
//     id: "1",
//     name: "YOU been added to event!",
//     time: +new Date(),
//   },
//   {
//     id: "2",
//     name: "You've been added to event!",
//     time: moment(+new Date()).fromNow(),
//   },
// ];

// // async function LoadData(_callback) {
// //   //console.log("Before Load:");
// //   var db = firebase.firestore().collection("events");
// //   await db.get().then((querySnapshot) => {
// //     // console.log("Event Size:", querySnapshot.size);

// //     querySnapshot.forEach((documentSnapshot) => {
// //       //console.log("Event ID:",documentSnapshot.id, documentSnapshot.data());
// //       data = documentSnapshot.data();

// //       // console.log("Event Name:", data['name']);
// //       // console.log("Event Desc:", data['desc']);
// //       // console.log("Got Data:");
// //     });
// //   });
// //   //name = data['name'];
// //   // console.log("After Load:", name);
// //   _callback();
// // }

// function Item({ name, time }) {
//   return (
//     <SafeAreaView style={styles.listItem}>
//       <Text>
//         {name} {time}
//       </Text>
//     </SafeAreaView>
//   );
// }

// export default class NotificationScreen extends React.Component {
//   state = {
//     currentState: "blue",
//   };

//   updateState = () => this.setState({ currentState: "red" });

//   render() {
//     return (
//       <ImageBackground
//         source={require("../assets/background2.png")}
//         style={styles.background}
//       >
//         <OrangeBanner title="Activity" />
//         <Text
//           onPress={this.updateState}
//           style={{ color: this.state.currentState }}
//         >
//           Press to turn red
//         </Text>
//       </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     alignItems: "center",
//   },
//   listItem: { width: windowWidth },
// });

// (
//   <ImageBackground
//     source={require("../assets/background2.png")}
//     style={styles.background}
//   >
//     <OrangeBanner title="Activity" />
//     <FlatList
//       ItemSeparatorComponent={() => (
//         <Divider
//           style={{
//             borderColor: "dodgerblue",
//             borderWidth: 1,
//           }}
//         ></Divider>
//       )}
//       data={notifications}
//       renderItem={({ item }) => <Item name={item.name} time={item.time} />}
//     />
//   </ImageBackground>
// );
