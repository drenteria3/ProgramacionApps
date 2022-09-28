import React from "react";

import Login from './vistas/login';
import Signup from './vistas/Signup';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry } from "react-native";

const Stack = createStackNavigator();

function App(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}