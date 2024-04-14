import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListSolar from "./ListSolarSystem";
import DetailSolar from "./DetailSolarSystem";
const Stack = createStackNavigator();
const SolarSystem = () => {
  return (
    <Stack.Navigator initialRouteName="Sistema Solar">
      <Stack.Screen
        name="Sistema Solar"
        component={ListSolar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetalleSistemaSolar"
        component={DetailSolar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default SolarSystem;