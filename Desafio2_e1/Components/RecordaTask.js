import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from "../App";
import AggActivity from "./AggActivity";
import Actividades from "./Actividades";

const Drawer = createDrawerNavigator();
export default function App() {
    return (
        <NavigationContainer independent={true} initialRouteName='Actividades' >
            <Drawer.Navigator >
                <Drawer.Screen
                    name="Actividades"
                    component={Actividades}
                />
                <Drawer.Screen
                    name="Agregar Actividad"
                    component={AggActivity}
                />
                <Drawer.Screen
                    name="Cerrar Sesión"
                    component={Login}
                    options={{
                        headerShown: false,
                    }
                    }
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    // BODY STYLE
    container: {
        flex: 1,
    },
});
