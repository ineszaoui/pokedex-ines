import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import DetailsPoke from '../pages/DetailsPoke';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function PokemonStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Shiny Pokedex' }} />
          <Stack.Screen name="DetailsPoke" component={DetailsPoke} options={{ title: 'Details' }} />
      </Stack.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="red" barStyle={{ backgroundColor: 'white' }}>
          <Tab.Screen name="Accueil" component={PokemonStack} options={{ headerShown: false, tabBarShowLabel: false, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ), }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}