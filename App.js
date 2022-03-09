import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList, SafeAreaView } from 'react-native';
import { PokeCard } from './compenents/PokeCard';
import { getPokemons } from './utils/PokeApi';

export default function App() {

  const [listPokemon, setListPokemon] = useState([])
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")

  const renderPokemon = ({item}) => {
    return <PokeCard name={item.name} url={item.url} />
  }

  const loadPokemon = (url) => {
    getPokemons(url).then(datas => {
      setListPokemon([...listPokemon, ...datas.results])
      setNextPage(datas.next)
    })
  }

  useEffect(() => {
    loadPokemon(nextPage)
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        data={listPokemon}
        renderItem={renderPokemon}
        keyExtractor={item => item.name}
        numColumns={2}
        onEndReached={() => {
          loadPokemon(nextPage)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  }
});
