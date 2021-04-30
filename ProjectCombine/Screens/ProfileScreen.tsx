import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Button,
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
import { TouchableOpacity } from "react-native-gesture-handler";

const profilePic = "../assets/santoshNew.jpeg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
      <Image
        style={{
          borderWidth: 5,
          borderColor: "dodgerblue",
          width: 150,
          height: 150,
          borderRadius: 75,
        }}
        source={require(profilePic)}
      />

      <SafeAreaView style={{ width: windowWidth * 0.8 }}>
        <Text style={{ fontSize: 22, color: "red" }}>Email</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.boxContainer}>
        <Text style={styles.textContainer}>{currentUser.email} </Text>
      </SafeAreaView>

      <SafeAreaView style={{ width: windowWidth * 0.8, marginTop: 20 }}>
        <Text style={{ fontSize: 22, color: "red" }}>Name</Text>
      </SafeAreaView>

      <SafeAreaView style={[styles.boxContainer, {}]}>
        <Text style={styles.textContainer}>{nameChange} </Text>
      </SafeAreaView>

      <Button
        title="Edit Name"
        onPress={() =>
          Alert.prompt("Edit Name", "Enter in new Name", (nameChange) =>
            setNameChange(nameChange)
          )
        }
      />
      <SafeAreaView style={{ width: windowWidth * 0.8 }}>
        <Text style={[{ fontSize: 22, color: "red" }]}>Age</Text>
      </SafeAreaView>
      <TouchableOpacity style={styles.boxContainer} activeOpacity={1}>
        <Text style={styles.textContainer}>{currentUser.age}</Text>
      </TouchableOpacity>
      <SafeAreaView style={{ width: windowWidth * 0.8, marginTop: 20 }}>
        <Text style={[{ fontSize: 22, color: "red" }]}>Bio</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.boxContainerBio}>
        <Text style={styles.textContainerBio}>{bioChange} </Text>
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

      <TouchableOpacity
        style={[styles.boxContainerSave, { marginTop: 20 }]}
        activeOpacity={0.5}
        onPress={updateProfile}
      >
        <Text style={styles.textContainerSave}>Save Changes</Text>
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
  photoRing: {
    borderWidth: 5,
    borderRadius: 85,
    borderColor: "dodgerblue",
  },

  textContainer: {
    fontSize: 20,
    color: "dodgerblue",
    fontWeight: "700",
  },
  textContainerBio: {
    fontSize: 20,
    color: "dodgerblue",
    fontWeight: "700",
    padding: 5,
  },
  boxContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.03,
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boxContainerBio: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.15,
    backgroundColor: "pink",
    borderRadius: 10,
  },
  boxContainerSave: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.04,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainerSave: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
export default connect(mapStateToProps, null)(ProfileScreen);

// import React, { useState, useEffect, Component } from "react";
// import {
//   StyleSheet,
//   Image,
//   ImageBackground,
//   Button,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   SafeAreaView,
//   Dimensions,
// } from "react-native";
// import { fetchUser } from "../redux/actions/index";

// import EditScreenInfo from "../Components/EditScreenInfo";
// import { Text, View } from "../Components/Themed";

// import firebase from "firebase";
// require("firebase/firestore");
// import { connect } from "react-redux";
// import { user } from "../redux/reducer/user";
// // import EditScreen from "./EditProfile";
// import Navigation from "../navigation";

// function ProfileScreen(props) {
//   const { currentUser } = props;
//   const [nameChange, setNameChange] = React.useState(currentUser.name);
//   const [bioChange, setBioChange] = React.useState(currentUser.bio);
//   console.log({ currentUser });
//   console.log({ nameChange, bioChange });

//   const updateProfile = () => {
//     firebase
//       .firestore()
//       .collection("users")
//       .doc(firebase.auth().currentUser.uid)
//       .update({
//         name: nameChange,
//         bio: bioChange,
//       });
//     Alert.alert("Changes saved!");
//   };

//   return (
//     <ImageBackground
//       source={require("../assets/background2.png")}
//       style={styles.container}
//     >
//       <SafeAreaView
//         style={{ borderWidth: 5, borderRadius: 85, borderColor: "dodgerblue" }}
//       >
//         <Image
//           style={{ borderRadius: 75, width: 150, height: 150 }}
//           source={require("../assets/santoshNew.jpeg")}
//         ></Image>
//       </SafeAreaView>

//       <SafeAreaView>
//         <SafeAreaView style={{ marginRight: 240 }}>
//           <Text style={{ fontSize: 22, color: "red" }}>Email</Text>
//         </SafeAreaView>

//         <SafeAreaView style={styles.box1}>
//           <Text style={{ fontSize: 18 }}>{currentUser.email} </Text>
//         </SafeAreaView>

//         <SafeAreaView style={{ marginRight: 240, marginTop: 20 }}>
//           <Text style={{ fontSize: 22, color: "red" }}>Name</Text>
//         </SafeAreaView>

//         <SafeAreaView style={styles.box1}>
//           <Text style={{ fontSize: 18 }}>{nameChange} </Text>
//         </SafeAreaView>

//         <SafeAreaView>
//           <Button
//             title="Edit Name"
//             onPress={() =>
//               Alert.prompt("Edit Name", "Enter in new Name", (nameChange) =>
//                 setNameChange(nameChange)
//               )
//             }
//           />
//         </SafeAreaView>

// <SafeAreaView style={{ marginRight: 260 }}>
//   <Text style={[{ fontSize: 22, color: "red" }]}>Age</Text>
// </SafeAreaView>

//         <SafeAreaView style={styles.box1}>
//           <Text style={[{ fontSize: 18 }]}>{currentUser.age}</Text>
//         </SafeAreaView>

//         <SafeAreaView style={{ marginRight: 190 }}>
//           <Text style={[{ fontSize: 22, color: "red" }, { paddingTop: 20 }]}>
//             Information
//           </Text>
//         </SafeAreaView>

//         <SafeAreaView style={styles.descBox}>
//           <Text style={{ fontSize: 18 }}>{bioChange} </Text>
//         </SafeAreaView>

//         <SafeAreaView>
//           <Button
//             title="Edit Bio"
//             onPress={() =>
//               Alert.prompt("Edit Bio", "Enter in new Bio", (bioChange) =>
//                 setBioChange(bioChange)
//               )
//             }
//           />
//         </SafeAreaView>

//    <SafeAreaView style={{ marginTop: 60 }}>
//   <TouchableOpacity
//     style={styles.appButtonContainer}
//     activeOpacity={0.5}
//     onPress={updateProfile}
//   >
//     <Text style={styles.appButtonText}>Save Changes</Text>
//   </TouchableOpacity>
// </SafeAreaView>;

//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   containerInfo: {
//     marginTop: 10,
//   },
//   appButtonContainer: {
//     backgroundColor: "#ffb4b0",
//     borderRadius: 10,
//     paddingVertical: 10,
//     width: 300,
//     position: "absolute",
//     bottom: 0,
//     marginTop: 50,
//   },
//   appButtonText: {
//     fontSize: 20,
//     color: "#ff5d55",
//     fontWeight: "800",
//     alignSelf: "center",
//   },
//   box: {
//     backgroundColor: "#ffb4b0",
//     shadowOpacity: 0.1,
//     borderRadius: 10,
//     paddingVertical: 10,
//     width: 300,
//     height: 50,
//     marginTop: 40,
//     alignSelf: "center",
//     justifyContent: "center",
//   },
//   box1: {
//     backgroundColor: "#ffb4b0",
//     shadowOpacity: 0.1,
//     borderRadius: 10,
//     paddingVertical: 10,
//     width: 300,
//     height: 50,
//     marginTop: 5,
//     alignItems: "center",
//   },
//   descBox: {
//     backgroundColor: "#ffb4b0",
//     shadowOpacity: 0.1,
//     borderRadius: 10,
//     paddingVertical: 10,
//     width: 300,
//     height: 150,
//     // marginTop: 40,
//     alignSelf: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });

// const mapStateToProps = (store) => ({
//   currentUser: store.userState.currentUser,
// });
// export default connect(mapStateToProps, null)(ProfileScreen);
