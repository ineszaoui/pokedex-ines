import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, FlatList} from 'react-native';


export default function DetailsPoke(prop) {

  const [listPokemon, setListPokemon] = useState([])
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")

  const {navigation, route, ...restProps} = prop;

  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <Image style={styles.imgPoke} source={{uri:route.params.img_front}}/>
            <Image style={styles.imgPoke} source={{uri:route.params.img_back}}/> 
        </View>
        <Text style={styles.span}>Pokemon n°{route.params.itemId}</Text>
        <Text style={styles.title}>{route.params.name} ❤️</Text>
        <Text style={styles.span}>Type {route.params.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%'
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 40
    },
    imgPoke: {
        width: 150,
        height: 150
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        margin: 30
    },
});
