import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListBlackHoles from "./ListBlackHoles";
import DetailBlackHoles from "./DetailBlackHoles";
const Stack = createStackNavigator();
const BlackHoles = () => {
  return (
    <Stack.Navigator initialRouteName="AgujerosNegros">
      <Stack.Screen
        name="Agujeros Negros"
        component={ListBlackHoles}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailBlackHoles"
        component={DetailBlackHoles}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default BlackHoles;