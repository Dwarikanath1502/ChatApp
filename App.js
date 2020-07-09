import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack' ;

import Home from './Components/Home';
import Chat from './Components/Chat';

const Stack = createStackNavigator();

function App(){
  
return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen 
        name = 'RocksBook'
        component = {Home}
      />    
       <Stack.Screen 
        name = 'Chat'
        component = {Chat}
      />    
  </Stack.Navigator>
</NavigationContainer>
);

}


export default App;
