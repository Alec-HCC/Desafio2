import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { SearchBar } from "react-native-screens";

const windowWidth = Dimensions.get("window").width;
const img = {
  uri: "https://i.pinimg.com/236x/d1/43/dd/d143dd65f172bf5f8423ae720cf2b0f6.jpg",
};

const ListSolar = ({ navigation }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://6618f12e9a41b1b3dfbe6284.mockapi.io/api/desafio2/solarsystem"
      );
      const data = await response.json();
      setPlanets(data);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.planetCard}
      onPress={() => navigation.navigate("DetalleSistemaSolar", { planet: item })}
    >
      <View style={styles.planetInfo}>
        <Image source={{ uri: item.imagen }} style={styles.planetImage} />
        <Text style={styles.planetName}>{item.nombre}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <FlatList
          data={planets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.planetList}
          numColumns={2} // Muestra dos países por fila
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#000000a1",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  planetList: {
    padding: 10,
  },
  planetCard: {
    width: windowWidth / 2 - 15, // Ajusta el ancho para mostrar dos países por fila
    margin: 5,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#2b292b",
    overflow: "hidden", // Para que la bandera no sobresalga del borde de la tarjeta
    backgroundColor: "#000000a1",
  },
  planetInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  planetImage: {
    width: "100%",
    aspectRatio: 1, // Ajustar el aspecto de la bandera
    resizeMode: "contain", // Ajustar la imagen para cubrir toda el área
  },
  planetName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
});
export default ListSolar;
