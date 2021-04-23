import firebase from "firebase";
import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { Text, View } from "../Components/Themed";

import { homedata } from "../Components/HomeData";

//var testdata = [{name: "Test Name", desc:"THIS IS THE DESCRIPTION"},{name: "SECOND", desc: "NEW TEST"}];

export default class HomeScreen extends React.Component {
  state = {
    backgroundColor: "rgba(0,0,200,0.05)",
    pressed: false,
  };
  renderSeparator = () => (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        height: 1,
      }}
    />
  );

  render() {
    //console.log("HOMEDATA: ", homedata);
    //console.log("TESTDATA:",testdata)
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.background}
      >
        <FlatList
          data={homedata}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderSeparator}
          //keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            //console.log(item);
            return (
              <SafeAreaView style={styles.Container}>
                <TouchableOpacity
                  style={{
                    backgroundColor: this.state.backgroundColor,
                    width: Dimensions.get("screen").width,
                    height:
                      Dimensions.get("screen").height -
                      Dimensions.get("screen").height * 0.88,
                  }}
                  //onPress={() => console.log("PRESSED")}
                  onPress={() =>
                    this.props.navigation.navigate("EventDetails", { item })
                  }
                >
                  <Text style={styles.name}>{item[0]} </Text>
                  <Text style={styles.desc}>{item[1]} </Text>
                </TouchableOpacity>
              </SafeAreaView>
            );
          }}
        />
      </ImageBackground>
    );
  }
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
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 125,
    paddingTop: 8,
    paddingBottom: 5,
    paddingRight: 5,
  },
  desc: {
    fontSize: 15,
    fontWeight: "normal",
    paddingLeft: 125,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
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
  background: {
    flex: 1,
    alignItems: "center",
  },
  Container: {
    borderWidth: 0,
    borderColor: "dodgerblue",
    alignSelf: "center",
    width: Dimensions.get("screen").width,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.88,
  },
});
