import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './compenents/CustomButton';
import { getPokemons } from './utils/PokeApi';

export default function App() {

  const [text, setText] = useState()
  const [listPokemon, setListPokemon] = useState()

  const displayColor = (color) => {
    console.log(color);
  }

  useEffect(() => {
    getPokemons().then(datas => {
        console.log(datas)
        setListPokemon(datas)
    })
  });

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <CustomButton color={"#ff0000"} title={"oui"} setText={setText}/>
      <CustomButton color={"#ff00ff"} title={"non"} setText={setText}/>
      <CustomButton color={"#00ff00"} title={"peutetre"} setText={setText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
