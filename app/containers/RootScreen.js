import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./HomeScreen";
import FavouriteScreen from "./FavouriteScreen";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
       screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
