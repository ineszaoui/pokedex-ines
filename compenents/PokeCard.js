import {StyleSheet, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { getPokemons } from '../utils/PokeApi';

export function PokeCard(props) {

  const {name, url, ...restProps} = props

  const [pokeDatas, setPokeDatas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    getPokemons(url).then(data => {
      setPokeDatas(data)
      setIsLoading(false)
    })
  },[])

  return (
    !isLoading?
    <View style={styles.pokemon}>
        <Image
          style={styles.imgPoke}
          source={{uri:pokeDatas.sprites.front_shiny}}
        />
        <Text style={styles.text}>{name}</Text>
    </View>
    :
    <View style={styles.pokemon}>
        <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemon: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  imgPoke: {
    width: 100,
    height: 100
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
