import React, { Component } from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./Components/main.js";
import Register from "./Screens/Register.js";
import LandingScreen from "./Screens/Landing.js";
import Login from "./Screens/Login.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
import thunk from "redux-thunk";
import * as firebase from "firebase";

const store = createStore(rootReducer, applyMiddleware(thunk));
const firebaseConfig = {
  apiKey: "AIzaSyDja8e25c5qWuocnY2rS94o0PL4av7sbmY",
  authDomain: "instagram-demo-da68b.firebaseapp.com",
  projectId: "instagram-demo-da68b",
  storageBucket: "instagram-demo-da68b.appspot.com",
  messagingSenderId: "199629117787",
  appId: "1:199629117787:web:e2b7ca0cff099ca117e27e",
  measurementId: "G-WKQ071G99T",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    //Called whenever the components actually mounts and will render next.
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        //user hasnt loaded and isnt logged in.
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <MainScreen></MainScreen>
      </Provider>
    );
  }
}

export default App;