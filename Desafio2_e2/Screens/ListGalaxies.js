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

const ListGalaxy = ({ navigation }) => {
  const [galaxies, setGalaxies] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://661939c0125e9bb9f2996c32.mockapi.io/desafio2/galaxy/Galaxies"
      );
      const data = await response.json();
      setGalaxies(data);
    } catch (error) {
      console.error("Error fetching galaxies:", error);
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.galaxyCard}
      onPress={() => navigation.navigate("DetailGalaxies", { galaxy: item })}
    >
      <View style={styles.galaxyInfo}>
        <Image source={{ uri: item.galaxyImage }} style={styles.galaxyImage} />
        <Text style={styles.galaxyName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <FlatList
          data={galaxies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.galaxyList}
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
  galaxyList: {
    padding: 10,
  },
  galaxyCard: {
    width: windowWidth / 2 - 15, // Ajusta el ancho para mostrar dos países por fila
    margin: 5,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#2b292b",
    overflow: "hidden", // Para que la bandera no sobresalga del borde de la tarjeta
    backgroundColor: "#000000a1",
  },
  galaxyInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  galaxyImage: {
    width: "100%",
    aspectRatio: 1, // Ajustar el aspecto de la bandera
    resizeMode: "contain", // Ajustar la imagen para cubrir toda el área
  },
  galaxyName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
});
export default ListGalaxy;
