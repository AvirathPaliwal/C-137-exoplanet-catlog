import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/Home"
import DetailsScreen from "./screens/Details"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default function App() {
  return (
   <AppContainer/>
  );
}


const appstacknavigator = createStackNavigator({
  home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
  details: { screen: DetailsScreen }
},
  { initialRouteName: "home" }
)

const AppContainer = createAppContainer(appstacknavigator) 
