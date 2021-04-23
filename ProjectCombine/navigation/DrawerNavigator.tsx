import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as React from "react";

import { connect } from "react-redux";

import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import EventScreen from "../Screens/EventScreen";
import HelpScreen from "../Screens/HelpScreen";
import LogoutScreen from "../Screens/LogoutScreen";
import EventDetails from "../Screens/EventDetails";

import {
  DrawerParamList,
  EventParamList,
  HelpParamList,
  HomeParamList,
  LogoutParamList,
  NotificationParamList,
  ProfileParamList,
} from "../types";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import firebase from "firebase";

require("firebase/firestore");

import HomeData from "../Components/HomeData";
HomeData();

const Drawer = createDrawerNavigator<DrawerParamList>();
// const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  const { currentUser } = props;
  console.log({ currentUser });
  
  if (currentUser.accountType === "Volunteer") {
    
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "red",
          labelStyle: { fontFamily: "Verdana", color: "#ff6623" },
        }}
        drawerStyle={{ backgroundColor: "#fbc956" }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={iconContainer.homeIcon}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileNavigator}
          options={iconContainer.profileIcon}
        />
        <Drawer.Screen
          name="Notification"
          component={NotificationNavigator}
          options={iconContainer.notificationIcon}
        />
        <Drawer.Screen
          name="Help"
          component={HelpNavigator}
          options={iconContainer.helpIcon}
        />
        <Drawer.Screen
          name="Logout"
          component={LogoutNavigator}
          options={iconContainer.logoutIcon}
        />
      </Drawer.Navigator>
    );
  }
  else {

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "red",
        labelStyle: { fontFamily: "Verdana", color: "#ff6623" },
      }}
      drawerStyle={{ backgroundColor: "#fbc956" }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={iconContainer.homeIcon}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileNavigator}
        options={iconContainer.profileIcon}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationNavigator}
        options={iconContainer.notificationIcon}
      />
      <Drawer.Screen
        name="Event"
        component={EventNavigator}
        options={iconContainer.eventIcon}
      />
      <Drawer.Screen
        name="Help"
        component={HelpNavigator}
        options={iconContainer.helpIcon}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutNavigator}
        options={iconContainer.logoutIcon}
      />
    </Drawer.Navigator>
  );
  }
}

const iconContainer = {
  homeIcon: {
    drawerIcon: ({ focused, size }) => (
      <Ionicons name="md-home" size={size} color={focused ? "red" : "tomato"} />
    ),
  },
  profileIcon: {
    drawerIcon: ({ focused, size }) => (
      <Ionicons
        name="person-sharp"
        size={size}
        color={focused ? "red" : "tomato"}
      />
    ),
  },
  notificationIcon: {
    drawerIcon: ({ focused, size }) => (
      <Ionicons
        name="notifications"
        size={size}
        color={focused ? "red" : "tomato"}
      />
    ),
  },
  eventIcon: {
    drawerIcon: ({ focused, size }) => (
      <Ionicons
        name="calendar"
        size={size}
        color={focused ? "red" : "tomato"}
      />
    ),
  },
  helpIcon: {
    drawerIcon: ({ focused, size }) => (
      <Ionicons
        name="help-circle"
        size={size}
        color={focused ? "red" : "tomato"}
      />
    ),
  },
  logoutIcon: {
    drawerIcon: ({ focused, size }) => (
      <Ionicons name="log-out" size={size} color={focused ? "red" : "tomato"} />
    ),
  },
};

const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator(props) {
  // if there is an error on 'props' it is fine and working correctly
  console.log(firebase.auth().currentUser);
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#8ebaff",
          },
          headerTitle: "Home",

          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image
                  source={require("../assets/menu-outline.png")} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get("window").width * 0.06,
                    height: Dimensions.get("window").height * 0.06,
                    marginLeft: 10,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
            </View>
          ),
          headerTitleStyle: {
            textAlign: "center",
            fontSize: 25,
          },
        }}
      />
      <HomeStack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#8ebaff",
          },
          headerTitleStyle: {
            textAlign: "center",
            fontSize: 25,
          },
          headerRight: () => (
            <View>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();
function ProfileNavigator(props) {
  // if there is an error on 'props' it is fine and working correctly
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#8ebaff",
          },
          headerTitle: "Profile",
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image
                  source={require("../assets/menu-outline.png")}
                  style={{
                    flex: 1,
                    width: Dimensions.get("window").width * 0.06,
                    height: Dimensions.get("window").height * 0.06,
                    marginLeft: 10,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
            </View>
          ),
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      />
    </ProfileStack.Navigator>
  );
}

const NotificationStack = createStackNavigator<NotificationParamList>();
function NotificationNavigator(props) {
  // if there is an error on 'props' it is fine and working correctly
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#8ebaff",
          },
          headerTitle: "Notifications",
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image
                  source={require("../assets/menu-outline.png")} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get("window").width * 0.06,
                    height: Dimensions.get("window").height * 0.06,
                    marginLeft: 10,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
            </View>
          ),
          headerTitleStyle: {
            textAlign: "center",
            fontSize: 24,
          },
        }}
      />
    </NotificationStack.Navigator>
  );
}

const EventStack = createStackNavigator<EventParamList>();
function EventNavigator(props) {
  // if there is an error on 'props' it is fine and working correctly
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          headerTitle: "Event",
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#8ebaff",
          },
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image
                  source={require("../assets/menu-outline.png")} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get("window").width * 0.06,
                    height: Dimensions.get("window").height * 0.06,
                    marginLeft: 10,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
            </View>
          ),
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      />
    </EventStack.Navigator>
  );
}

const HelpStack = createStackNavigator<HelpParamList>();
function HelpNavigator(props) {
  // if there is an error on 'props' it is fine and working correctly
  return (
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerTitle: "Help",
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#8ebaff",
          },
          headerLeft: () => (
            <View>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Image
                  source={require("../assets/menu-outline.png")} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get("window").width * 0.06,
                    height: Dimensions.get("window").height * 0.06,
                    marginLeft: 10,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <View>
            </View>
          ),
        }}
      />
    </HelpStack.Navigator>
  );
}
const LogoutStack = createStackNavigator<LogoutParamList>();
function LogoutNavigator(props) {
  // if there is an error on 'props' it is fine and working correctly
  firebase.auth().signOut();
  return (
    <LogoutStack.Navigator>
      <LogoutStack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{ headerShown: false }}
      />
    </LogoutStack.Navigator>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});
export default connect(mapStateToProps, null)(DrawerNavigator);