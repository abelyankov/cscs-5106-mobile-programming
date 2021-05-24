//  20MD0112 Belyankov Arthur
 import React from 'react';
 import { createStackNavigator } from "react-navigation-stack";
 import { createAppContainer } from "react-navigation";

 import PokeList from './components/PokeList';
 import Pokemon from './components/Pokemon';
 import Home from './components/Home';
 
 const RootStack = createStackNavigator({

     Home: { screen: Home },
     PokeList: { screen: PokeList },
     Pokemon: {screen: Pokemon }
   },
   {
     initialRouteName:  'Home'
   })
   const AppNavigator = createAppContainer(RootStack);
 
 const App = () => {
   return <AppNavigator />
 }
 
 export default App;