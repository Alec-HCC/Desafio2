import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "./Logo";

import { Component } from "react";

export default function Register({ navigation }) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Register = async () => {
    if (user.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Todos los campos son requeridos');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await AsyncStorage.setItem('username', user);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      alert('Registro exitoso');
      navigation.navigate('Login'); // Navegar a la pantalla de Evento después del registro
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      alert('Ocurrió un error al guardar los datos');
    }
  }

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
      <Text style={styles.text}>Register</Text>
      <KeyboardAvoidingView
        style={styles.inputGroup}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Name" value={user} onChangeText={setUser} />
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
          <Text style={styles.button} onPress={Register}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.register}>
        <Text style={styles.regis}>
          Already Have an Account? &nbsp;
          <Text
            style={[styles.regis, styles.link]}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // TEXT LOGIN STYLE
  text: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Inter_200ExtraLight",
    marginBottom: "5%",
  },

  // INPUTS STYLES
  containerInput: {
    width: "80%",
    padding: 10,
  },
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderColor: "#6F6DB5",
    borderWidth: 2,
    fontSize: 16,
    borderRadius: 15,
    marginBottom: "3%",
  },

  // BUTTON STYLE
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  button: {
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 12.5,
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
