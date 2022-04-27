import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Settings() {

  return (
    <SafeAreaView style={styles.container}>
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
  }
});
