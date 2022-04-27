import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings() {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.pdp}>
          <Text>img</Text>
        </View>
        <View style={styles.title}>
          <Text>Inès Zaoui</Text>
        </View>
        <View style={styles.button}>
          <Text>Modifier mon nom</Text>
        </View>
        <View style={styles.button}>
          <Text>Modifier ma photo de profil</Text>
        </View>
        <View style={styles.button}>
          <Text>Soumettre une modification</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%'
  },
  pdp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 50,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100,
  },
  title: {
    marginTop: 20,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'black',
  }
});
