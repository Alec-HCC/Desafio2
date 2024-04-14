import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListGalaxies from "./ListGalaxies";
import DetailGalaxies from "./DetailGalaxies";
const Stack = createStackNavigator();
const Galaxies = () => {
  return (
    <Stack.Navigator initialRouteName="Galaxias">
      <Stack.Screen
        name="Galaxias"
        component={ListGalaxies}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailGalaxies"
        component={DetailGalaxies}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Galaxies;