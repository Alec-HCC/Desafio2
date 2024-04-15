import { StatusBar } from "expo-status-bar";
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
import {
  useFonts,
  Inter_200ExtraLight,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "./Logo";

import { Component } from "react";

export default function Register({ navigation }) {
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
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
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
          <Text style={styles.button}>Sign Up</Text>
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
