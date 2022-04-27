import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import DetailsPoke from '../pages/DetailsPoke';
import Settings from '../pages/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function PokemonStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="PokemonList" component={Home} options={{ title: 'Shiny Pokedex' }} />
          <Stack.Screen name="DetailsPoke" component={DetailsPoke} options={{ title: 'Details' }} />
      </Stack.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="red" barStyle={{ backgroundColor: 'white' }}>
          <Tab.Screen name="Home" component={PokemonStack} options={{ headerShown: false, tabBarShowLabel: true, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ), }}/>
          <Tab.Screen name="Search" component={Search} options={{ headerShown: false, tabBarShowLabel: true, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ), }}/>
          <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarShowLabel: true, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ), }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}