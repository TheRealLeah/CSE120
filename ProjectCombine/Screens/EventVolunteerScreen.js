//LEAHS PAGE
import React, { Component } from "react";
//needed to import safeareaview and dimensions
import { StyleSheet, ImageBackground, Text, SafeAreaView, Dimensions} from "react-native";
//importing flatlsist (I want to use a flatlist to store everything.)
//importing scrollview
import { FlatList, TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { homedata } from "../Components/HomeData";
class EventVolunteerScreen extends Component {
  state = {};

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
});

export default EventVolunteerScreen;
//<Text style={{ fontSize: 30 }}>
         // This is the event page for volunteers
       // </Text>