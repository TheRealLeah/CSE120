import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation, NavigationContainer, DrawerActions } from '@react-navigation/native';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import EventScreen from '../screens/EventScreen';
import HelpScreen from '../screens/HelpScreen';
import LogoutScreen from '../screens/LogoutScreen';

import { DrawerParamList, EventParamList, HelpParamList, HomeParamList, LogoutParamList, NotificationParamList, ProfileParamList } from '../types';
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from 'expo';


const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileNavigator}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationNavigator}
      />
      <Drawer.Screen
        name="Event"
        component={EventNavigator}
      />
      <Drawer.Screen
        name="Help"
        component={HelpNavigator}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutNavigator}
      />
    </Drawer.Navigator>
  );
}


const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator(props) { // if there is an error on 'props' it is fine and working correctly
  return (
    
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: 'Home',
          headerLeft: () => (
	          <View>
	          	<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }> 
                <Image 
                  source = {require('../assets/images/menu-outline.png')} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width*0.06,
                    height: Dimensions.get('window').height*0.06,
                    marginLeft: 10,
                    resizeMode: 'contain'
                  }}
                />
	          	</TouchableOpacity>
	          </View>
          ),
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

const ProfileStack = createStackNavigator<ProfileParamList>();
function ProfileNavigator(props) { // if there is an error on 'props' it is fine and working correctly
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ 
          headerTitle: 'Profile',
          headerLeft: () => (
	          <View>
	          	<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }> 
                <Image 
                  source = {require('../assets/images/menu-outline.png')} 
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width*0.06,
                    height: Dimensions.get('window').height*0.06,
                    marginLeft: 10,
                    resizeMode: 'contain'
                  }}
                />
	          	</TouchableOpacity>
	          </View>
          ),
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </ProfileStack.Navigator>
  )
}

const NotificationStack = createStackNavigator<NotificationParamList>();
function NotificationNavigator(props) { // if there is an error on 'props' it is fine and working correctly
  return (
    
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ 
          headerTitle: 'Notification',
          headerLeft: () => (
	          <View>
	          	<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }> 
                <Image 
                  source = {require('../assets/images/menu-outline.png')} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width*0.06,
                    height: Dimensions.get('window').height*0.06,
                    marginLeft: 10,
                    resizeMode: 'contain'
                  }}
                />
	          	</TouchableOpacity>
	          </View>
          ),
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </NotificationStack.Navigator>
  )
}

const EventStack = createStackNavigator<EventParamList>();
function EventNavigator(props) { // if there is an error on 'props' it is fine and working correctly
  return (
    
    <EventStack.Navigator>
      <EventStack.Screen
        name="EventScreen"
        component={EventScreen}
        options={{ 
          headerTitle: 'Event',
          headerLeft: () => (
	          <View>
	          	<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }> 
                <Image 
                  source = {require('../assets/images/menu-outline.png')} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width*0.06,
                    height: Dimensions.get('window').height*0.06,
                    marginLeft: 10,
                    resizeMode: 'contain'
                  }}
                />
	          	</TouchableOpacity>
	          </View>
          ),
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </EventStack.Navigator>
  )
}

const HelpStack = createStackNavigator<HelpParamList>();
function HelpNavigator(props) { // if there is an error on 'props' it is fine and working correctly
  return (
    
    <HelpStack.Navigator>
      <HelpStack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ 
          headerTitle: 'Help',
          headerLeft: () => (
	          <View>
	          	<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }> 
                <Image 
                  source = {require('../assets/images/menu-outline.png')} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width*0.06,
                    height: Dimensions.get('window').height*0.06,
                    marginLeft: 10,
                    resizeMode: 'contain'
                  }}
                />
	          	</TouchableOpacity>
	          </View>
          ),
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </HelpStack.Navigator>
  )
}
const LogoutStack = createStackNavigator<LogoutParamList>();
function LogoutNavigator(props) { // if there is an error on 'props' it is fine and working correctly
  return (
    
    <LogoutStack.Navigator>
      <LogoutStack.Screen
        name="LogoutScreen"
        component={LogoutScreen}
        options={{ 
          headerTitle: 'Logout',
          headerLeft: () => (
	          <View>
	          	<TouchableOpacity onPress={() => props.navigation.toggleDrawer() }> 
                <Image 
                  source = {require('../assets/images/menu-outline.png')} //.svg is invisable in ios
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width*0.06,
                    height: Dimensions.get('window').height*0.06,
                    marginLeft: 10,
                    resizeMode: 'contain'
                  }}
                />
	          	</TouchableOpacity>
	          </View>
          ),
          headerTitleStyle: {
            textAlign: 'center'
          }
        }}
      />
    </LogoutStack.Navigator>
  )
}

