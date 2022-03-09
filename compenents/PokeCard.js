import {StyleSheet, View, Text, Image } from 'react-native';

export function PokeCard(props) {

  const {name, url, ...restProps} = props

  return (
    <View style={styles.pokemon}>
        <Image
          style={styles.imgPoke}
          source={{
            uri: 'https://assets.pokemon.com/assets//cms2-fr-fr/img/video-games/_tiles/pokemon-go/03012022/pokemon-go-34.jpg',
          }}
        />
        <Text style={styles.text}>{name}</Text>
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
