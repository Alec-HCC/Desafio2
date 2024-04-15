import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from "react-native";
import React from "react";

export default function Logo() {
  return (
    <KeyboardAvoidingView
      style={styles.inputGroup}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
});
