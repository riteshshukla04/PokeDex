/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-reanimated'
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SortByNumber from './components/sortbynumber';
import DetailedPokemon from './components/about/Index';
import {GlobalProvider} from './components/Actions/GlobalProvider';
import {QueryClient, QueryClientProvider} from 'react-query';
import { MotiView } from 'moti';
import HomeNavigator from './components/Navigator/HomeNavigator';
import Loading from './components/Loading/Loading';
import BottomCard from './components/about/BottomCard';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryClientProvider client={queryClient}> 
      <GlobalProvider>
      <HomeNavigator/>
      </GlobalProvider>
      </QueryClientProvider>
     
    </SafeAreaView>
  );
};

export default App;
