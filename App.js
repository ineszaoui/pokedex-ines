import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import CustomButton from './compenents/CustomButton';
import { getPokemons } from './utils/PokeApi';

export default function App() {

  //const [text, setText] = useState()
  const [listPokemon, setListPokemon] = useState()

  let nextPage = null;

  /*const displayColor = (color) => {
    console.log(color);
  }*/

  const renderPokemon = ({item}) => (
    <Text style={styles.text}>{item.name}</Text>
  )

  useEffect(() => {
    getPokemons().then(datas => {
        console.log(datas)
        setListPokemon(datas.results)
    })
  }, []);

  return (
    <View style={styles.container}>
      {/*<Text>{text}</Text>
      <StatusBar style="auto" />
      <CustomButton color={"#ff0000"} title={"oui"} setText={setText}/>
      <CustomButton color={"#ff00ff"} title={"non"} setText={setText}/>
      <CustomButton color={"#00ff00"} title={"peutetre"} setText={setText}/>*/}
      <FlatList
        data={listPokemon}
        renderItem={renderPokemon}
        keyExtractor={item => item.name}
        numColumns={2}
        onEndReached={() => {
          console.log('end')
          if (nextPage){
            getPokemons().then(datas => {
              nextPage = datas.nextPage
              setListPokemon(datas.results)
            })
          } 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'red',
    padding: '2rem',
    margin: '2rem'
  }
});
