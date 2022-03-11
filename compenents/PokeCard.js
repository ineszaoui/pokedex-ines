import {StyleSheet, View, Text, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { getPokemons } from '../utils/PokeApi';

export function PokeCard(props) {

  const {name, url, navigation, ...restProps} = props

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
          source={{uri:pokeDatas.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny}}
        />
        <Text style={styles.text}>{name}</Text>
        <Button title="Go to Details" color="#000000" onPress={() => navigation.navigate('DetailsPoke', {
          itemId: pokeDatas.id,
          name: name,
          img_front: pokeDatas.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny,
          img_back: pokeDatas.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny,
          type: pokeDatas.types[0].type.name,
          })}/>
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
