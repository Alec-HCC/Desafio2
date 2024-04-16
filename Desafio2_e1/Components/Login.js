import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Pressable,
  Linking,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "./Logo";

const Stack = createStackNavigator();

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [semail, setsEmail] = useState('');
  const [spassword, setsPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    savedData();
  }, []);

  const savedData = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
      const savedName = await AsyncStorage.getItem('username');

      if (savedEmail && savedPassword) {
        setsEmail(savedEmail);
        setsPassword(savedPassword);
        setName(savedName);
      }
    } catch (error) {
      console.error('Error al obtener los datos guardados:', error);
    }
  };

  const Login = () => {
    console.log('Email:', email + semail);
    console.log('Contraseña:', password + spassword);
    if(semail == email && spassword == password ){
      alert('Bienvenido ' + name);
      navigation.navigate('RecordaTask'); // Navegar a la pantalla de Evento después del registro

    }
    
  };

  let [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>Login</Text>
      <KeyboardAvoidingView
        style={styles.inputGroup}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.containerButton}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#e0c3fc", "#8ec5fc"]}
          style={styles.button}
        >
          <Text style={styles.button} onPress={Login}>Log In</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={styles.regis}>
          Don't Have an Account? &nbsp;
          <Text
            style={[styles.regis, styles.link]}
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // TEXT LOGIN STYLE
  text: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Inter_200ExtraLight",
    marginBottom: "10%",
  },

  // INPUTS STYLES
  containerInput: {
    width: "80%",
    padding: 5,
  },
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 15,
    borderColor: "#6F6DB5",
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 15,
    marginBottom: "5%",
  },

  // BUTTON STYLE
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    color: "#fff",
    fontFamily: "Inter_400Regular",
  },

  // LINK STYLE
  register: {
    alignItems: "center",
    marginTop: 20,
    fontSize: 18,
  },
  regis: {
    alignItems: "center",
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Inter_200ExtraLight",
  },

  link: {
    alignItems: "center",
    fontWeight: "500",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter_400Regular",
    color: "#E38FE3"
  },
});
