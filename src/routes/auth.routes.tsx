import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler'
import Home from '../screens/Home/Home';
import LoadScreen from '../screens/LoadScreen/LoadScreen';

import { styles } from './styles';
import { View, Image, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Search from '../screens/Search/Search';

const Tab = createBottomTabNavigator();
// require((focused ? '../assets/icons/home1.png' :'../assets/icons/home.png'))
export default function AuthRoutes() {
  return (
    <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ showLabel: false, style: styles.navigator}} >
          <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ( {focused} ) => (
              <View style={styles.container}>
                    <Image source={focused ? require('../assets/icons/home1.png') : require('../assets/icons/home.png')} resizeMode='contain' style={[styles.imageIcon, {tintColor: focused ? '#000' : '#4B4B4B'}]} />
                  <Text style={[styles.text, {color: focused ? '#000' : '#4B4B4B'}]}>Home</Text>
              </View>
          )}} />
          <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ( {focused} ) => (
              <View style={styles.container}>
                    <Image source={require('../assets/icons/search-small.png')} resizeMode='contain' style={[styles.imageIcon, {tintColor: focused ? '#000' : '#4B4B4B'}]} />
                  <Text style={[styles.text, {color: focused ? '#000' : '#4B4B4B'}]}>Search</Text>
              </View>
          )}} />
          <Tab.Screen name="Your Library" component={LoadScreen} options={{tabBarIcon: ( {focused} ) => (
              <View style={styles.container}>
                    <Image source={require('../assets/icons/library-small.png')} resizeMode='contain' style={[styles.imageIcon, {tintColor: focused ? '#000' : '#4B4B4B'}]} />
                  <Text style={[styles.text, {color: focused ? '#000' : '#4B4B4B'}]}>Your Library</Text>
              </View>
          )}}/>
          <Tab.Screen name="Premium" component={LoadScreen} options={{tabBarIcon: ( {focused} ) => (
              <View style={styles.container}>
                    <Image source={require('../assets/icons/spotify-logo.png')} resizeMode='contain' style={[styles.imageIcon, {tintColor: focused ? '#000' : '#4B4B4B'}]} />
                  <Text style={[styles.text, {color: focused ? '#000' : '#4B4B4B'}]}>Premium</Text>
              </View>
          )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}