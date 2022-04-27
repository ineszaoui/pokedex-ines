import { Text, TextInput, Button, StyleSheet } from "react-native"
import { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context"
import { getPokemons } from "../utils/PokeApi";

export default function Search(props){

    const [search, setSearch] = useState("")
    const [isPokemonFound, setIsPokemonFound] = useState(false)
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        if (isPokemonFound) {
            props.navigation.navigate('DetailsPoke',{
                itemId: pokemon.id,
                name: pokemon.name,
                img_front: pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny,
                img_back: pokemon.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny,
                type: pokemon.types[0].type.name,
                })
            setIsPokemonFound(false)
        }
    }, [isPokemonFound])

    return(
        <SafeAreaView style={styles.container}>
            <TextInput onChangeText={text => setSearch(text)} style={styles.textInput}>{search}</TextInput>
            <Button
                onPress={() => {searchPokemon(search, setPokemon, setIsPokemonFound)}}    
                title="search"
                color="red"
            />
        </SafeAreaView>
    )
}

const searchPokemon = (pokemonName,setPokemon, isPokemonFound) => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/"+pokemonName.toLowerCase()).then(res => {
        if (res) {
            setPokemon(res)
            isPokemonFound(true)
        }
    })
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: 'white',
      alignItems: 'center',
      height: '100%'
      },
      textInput: {
          width:  '80%',
          backgroundColor: 'lightgrey',
          marginTop: '10%',
          marginBottom: '5%',
          padding: 15,
          borderStyle: 'solid',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
      },
      button: {
            width: '80%',
      }
  });