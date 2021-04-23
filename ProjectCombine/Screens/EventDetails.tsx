import fb from "../fb";
import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Button } from 'react-native';

import EditScreenInfo from '../Components/EditScreenInfo';
import { Text, View } from '../Components/Themed';


export default function EventDetails({route,navigation}) {
    //console.log("Params: ", route.params);
    const {item} = route.params; 
    var name = item[0];
    var desc = item[1];
    var contactinfo = item[2];
    var location = item[3];
    var time = item[4]
    //console.log("Name: ", name);
    return (
        <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.background}
        >
            <Text style={styles.title}> {name} </Text>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("PRESSED ON VOLUNTEER")}
            >
                <Text style={styles.buttontext}>Volunteer</Text>
            </TouchableOpacity>

            <Text style={styles.desc}>Desc: {desc} </Text>
            <Text style={styles.contact}>Contact: {contactinfo} </Text>
            <Text style={styles.Location}>Location: {location} </Text>
            <Text style={styles.time}>Time: {time} </Text>

        </ImageBackground>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        alignSelf: "center"
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      background: {
        flex: 1,
        //alignItems: "center",
      },
      button: {
        backgroundColor: "#E6FEFF",
        shadowOpacity: 0.25,
        borderRadius: 10,
        width: Dimensions.get('screen').width-(Dimensions.get('screen').width*.6),
        height: Dimensions.get('screen').height-(Dimensions.get('screen').height*.95),
        marginTop: Dimensions.get('screen').height-(Dimensions.get('screen').height*.75),
        alignSelf: "center",
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
        
    }
    });