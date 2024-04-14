import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
const DetailBlackHoles = ({ route, navigation }) => {
  const { holes } = route.params;
  const img = {
    uri: "https://i.pinimg.com/236x/d1/43/dd/d143dd65f172bf5f8423ae720cf2b0f6.jpg",
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <Text style={styles.heading}>Detalles del agujero negro</Text>
        <View style={styles.detailsContainer}>
          <Image source={{ uri: holes.image }} style={styles.holesImage} />
          <Text>
            <Text style={styles.label}>Nombre: {holes.name}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Descripción del agujero negro: {holes.description}</Text>
          </Text>
        </View>
        <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Regresar</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  detailsContainer: {
    borderWidth: 3,
    borderColor: "#d8a6ff",
    backgroundColor: "#000000a1",
    borderRadius: 8,
    padding: 20,
    width: "80%",
    marginBottom: 25,
  },
  label: {
    fontWeight: "bold",
    color: "#fff",
  },
  holesImage: {
    width: "100%",
    aspectRatio: 2, // Ajustar el aspecto de la bandera
    resizeMode: "contain", // Ajustar la imagen para cubrir toda el área
    borderColor: "#000000",
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#000",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default DetailBlackHoles;
