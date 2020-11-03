/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from "./screen/HomeScreen.js";
import {ProfileScreen} from "./screen/ProfileScreen.js";

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import RegistrationScreen from './screen/RegistrationScreen.js';

const DayList = ({items}) => {
  return (
      <FlatList
        data = {items}
        renderItem = {({item}) => {
          return(
            <View style = {{
              display: "flex",
            }}>
              <Text>
                {item.dayName}
              </Text>
              <Text>
                {item.dayNumber}
              </Text>
            </View>
          )
        }}
        >
      </FlatList>
  )
};
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" // for navigation method
          component={HomeScreen}
          options={{ title: "Home" }} // for view
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    );
};

const styles = StyleSheet.create({
  
});

export default App;
