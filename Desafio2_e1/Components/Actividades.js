import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Logo() {
  return (
    <View style={styles.img}>
      <Image 
        source={require('../assets/login_ico.png')} style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image : {
    width: 250,
    height: 250,
  }
});