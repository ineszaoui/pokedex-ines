import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import DetailsPoke from './pages/DetailsPoke';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Shiny Pokedex' }} />
            <Stack.Screen name="DetailsPoke" component={DetailsPoke} options={{ title: 'Details' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}