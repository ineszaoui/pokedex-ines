import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings() {

  return (
    <SafeAreaView>
        <Text>oui</Text>
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
