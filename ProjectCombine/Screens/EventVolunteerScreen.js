//LEAHS PAGE
import React, { Component } from "react";
//needed to import safeareaview and dimensions
import { StyleSheet, ImageBackground, Text, SafeAreaView, Dimensions} from "react-native";
//importing flatlsist (I want to use a flatlist to store everything.)
//importing scrollview
import { FlatList, TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { homedata } from "../Components/HomeData";
class EventVolunteerScreen extends Component {
  state = {
    //this stuff inside is what makes the shade of blue slightly different
    backgroundColor: "rgba(0,0,200,0.05)",
    pressed: false,
  };
  //added a separator line 
  renderSeparator = () => (
    <SafeAreaView
      style={{
        backgroundColor: "dodgerblue",
        height: 1,
      }}
    />
  );
  onEventAdded = (event) => {};

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.container}
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
                 <ScrollView>
                   <Text style={styles.desc}>{item[1]} </Text>
                 </ScrollView>
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
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 125,
    paddingTop: 8,
    paddingBottom: 20,
    paddingRight: 5,
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.05,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.96,
    overflow: "hidden",
  },
  //added the scrolling features
  desc: {
    fontSize: 15,
    fontWeight: "normal",
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.05,
    height:
      Dimensions.get("screen").height - Dimensions.get("screen").height * 0.88,
    paddingLeft: 125,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    overflow: "scroll",
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
    width:
      Dimensions.get("screen").width - Dimensions.get("screen").width * 0.1,
    height: 10,
    marginTop: 40,
    alignSelf: "center",
    marginVertical: Dimensions.get("screen").height,
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

export default EventVolunteerScreen;
//<Text style={{ fontSize: 30 }}>
         // This is the event page for volunteers
       // </Text>