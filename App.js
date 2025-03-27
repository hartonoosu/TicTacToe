import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home"
import Rules from "./src/screens/Rules";
import Credit from "./src/screens/Credit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Rules" component={Rules}></Stack.Screen>
        <Stack.Screen name="Credit" component={Credit}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}