import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";
import OrangeBanner from "../Components/OrangeBanner";
// import firestore from "@react-native-firebase/firestore";

const windowWidth = Dimensions.get("window").width;
const notifications = [
  {
    id: 1,
    name: "You've been added to {name} event!",
    time: "30 mins ago",
  },
  {
    id: 2,
    name: "You've been added to {name} event!",
    time: "6 hrs ago",
  },
  {
    id: 3,
    name: "You've been added to {name} event!",
    time: "21 hrs ago",
  },
  {
    id: 4,
    name: "You've been added to {name} event!",
    time: "1 day ago",
  },
];
function Item({ name, time }) {
  return (
    <SafeAreaView style={x.listItem}>
      <Text style={x.listName}>{name}</Text>
      <Text style={x.listTime}>{time}</Text>
    </SafeAreaView>
  );
}
const x = StyleSheet.create({
  listItem: {
    backgroundColor: "#d4e3fc",
    flexDirection: "column",
    width: windowWidth,
    borderColor: "#a8c6fa",
    borderWidth: 4,
  },
  listName: {
    marginLeft: 100,
    paddingTop: 20,
    color: "dodgerblue",
    fontSize: 20,
  },
  listTime: {
    marginLeft: 100,
    paddingTop: 20,
    paddingBottom: 5,
    color: "cornflowerblue",
  },
});

export default function NotificationScreen() {
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
