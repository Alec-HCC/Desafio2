import { StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SolarSystem from "./Screens/SolarSystem";
import Galaxies from "./Screens/Galaxies";
import BlackHoles from "./Screens/BlackHoles";


export default function App() {
  const Tab = createBottomTabNavigator();
  const MyTheme = {
    dark: true,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(255, 255, 255)",
      card: "rgb(60, 60, 60)",
      text: "rgb(255, 255, 255)",
      border: "rgb(0,0,0)",
      notification: "rgb(255, 255, 255)",
    },
  };
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "#757272",
        tabBarActiveTintColor: "#fff",
        backgroundColor: "#rgb(60, 60, 60)",
        tabBarStyle: {
          backgroundColor: "rgb(60, 60, 60)",
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Sistema Solar") {
            iconName = Platform.OS === "ios" ? "planet" : "planet";
          } else if (route.name === "Galaxias") {
            iconName = Platform.OS === "ios" ? "logo-tableu" : "logo-tableau";
          } else if (route.name === "Agujeros Negros") {
            iconName = Platform.OS === "ios" ? "logo-slack" : "logo-slack";
          }
          // Devolver el componente de icono correspondiente
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Sistema Solar" component={SolarSystem}/>
      <Tab.Screen name="Galaxias" component={Galaxies}/>
      <Tab.Screen name="Agujeros Negros" component={BlackHoles}/>
    </Tab.Navigator>
  );
  return (
    <NavigationContainer theme={MyTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#edd8eb",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
