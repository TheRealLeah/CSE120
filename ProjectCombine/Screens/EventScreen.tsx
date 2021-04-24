import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { ListItem, Divider } from 'react-native-elements';
import { addEvent } from "../api/EventAPI";

class Events extends Component{

  state = {
    name: null,
    desc: null,
    location: null,
    time: null,
    contactinfo: null,
  }

  onEventAdded = (event) => {
    console.log("Event Added");
    console.log(event);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.container}
      >
       
        <SafeAreaView>
          <TextInput
            placeholder="Add Event Name"
            value={this.state.name}
            onChangeText={(text) => this.state.name = text}
          />
          <TextInput
            placeholder="Add Event Description"
            value={this.state.desc}
            onChangeText={(text) => this.state.desc = text}
          />
          <TextInput
            placeholder="Add Event Location"
            value={this.state.location}
            onChangeText={(text) => this.state.location = text}
          />
          <TextInput
            placeholder="Add Event Time"
            value={this.state.time}
            onChangeText={(text) => this.state.time = text}
          />
          <TextInput
            placeholder="Add Event Contact Information"
            value={this.state.contactinfo}
            onChangeText={(text) => this.state.contactinfo = text}
          />
          <Button
            title='Submit'
            onPress={() => 
            addEvent({
              name: this.state.name,
              desc: this.state.desc,
              location: this.state.location,
              time: this.state.time,
              contactinfo: this.state.contactinfo,
            },
            this.onEventAdded)
            }
          />
        </SafeAreaView>

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
  containerInfo: {
    marginTop: 10,
  },
  appButtonContainer: {
    backgroundColor: "#ffb4b0",
    borderRadius: 10,
    paddingVertical: 10,
    width: 300,
    marginTop: 30,
  },
  appButtonText: {
    fontSize: 20,
    color: "#ff5d55",
    fontWeight: "800",
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.25,
    borderRadius: 10,
    paddingVertical: 10,

    width: 300,
    height: 50,
    marginTop: 40,
    alignSelf: "center",
  },
  descBox: {
    backgroundColor: "#ffb4b0",
    shadowOpacity: 0.25,
    borderRadius: 10,
    paddingVertical: 10,

    width: 300,
    height: 250,
    marginTop: 40,
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

export default Events;