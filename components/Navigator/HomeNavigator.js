// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailedPokemon from '../about/Index';
import SortByNumber from '../sortbynumber';



const Stack = createNativeStackNavigator();

const HomeNavigator=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PokemonList'>
        <Stack.Screen name='PokemonList' options={{ headerShown: false }} component={SortByNumber}></Stack.Screen>
        <Stack.Screen name="DetailedPokemon" options={{ headerShown: false }} component={DetailedPokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigator;