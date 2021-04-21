import firebase from "/Users/JoshGialis/Desktop/CSE LOCAL 120/CSE120/ProjectCombine/fb.js";
import React from "react";
import { StyleSheet, ImageBackground, Text, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Divider } from "react-native-elements";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { getNotification } from "/Users/JoshGialis/Desktop/CSE LOCAL 120/CSE120/ProjectCombine/api/NotificationsAPI.js";
import OrangeBanner from "../Components/OrangeBanner";
// // import moment from "moment";
export default class NotificationScreen extends React.Component {
  state = {
    notificationList: [],
    currentNotification: null,
  };

  // onNotificationAdded = (notification) => {
  //   // console.log("Notification added!");
  //   // console.log(notification);
  //   this.setState((prevState) => ({
  //     notificationList: [...prevState.notificationList, notification],
  //   }));
  // };

  onNotificationReceived = (notificationList) => {
    this.setState((prevState) => ({
      notificationList: (prevState.notificationList = notificationList),
    }));
  };

  componentDidMount() {
    getNotification(this.onNotificationReceived);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.background}
      >
        <OrangeBanner title="Activity" />
        <FlatList
          data={this.state.notificationList}
          ItemSeparatorComponent={() => (
            <Divider style={{ backgroundColor: "red" }}></Divider>
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <SafeAreaView>
                <Text>
                  You've signed up for {item.name} at {+new Date()}!
                </Text>
              </SafeAreaView>
            );
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
});

/*



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


*/
