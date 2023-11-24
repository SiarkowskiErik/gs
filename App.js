// Integrantes
// RM95854 - Eduarda Nicoli Cavalheiro
// RM93535 - Erik Siarkowski Salafia
// RM95396 - Ingrid Vieira de Oliveira

import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

import { NovoDiagnostico } from './components/NovoDiagnostico.js';
import { Home } from './components/Home.js';
import { Historico } from './components/Historico.js';

const {Screen, Navigator} = createBottomTabNavigator();

export default function App() {
  return (
    
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Navigator screenOptions={{tabBarStyle: {position:'absolute',bottom:25,left:20,right:20,elevation:5,backgroundColor:'#25960c',borderRadius:20, height:50 },}}>
          <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarInactiveTintColor:'lightgrey',tabBarActiveTintColor: 'white', tabBarIcon:({focused,color,size})=>{
            let iconName;
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }}} name='Diagnostico'>
            {()=><NovoDiagnostico/>}
          </Screen>

          <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarInactiveTintColor:'lightgrey',tabBarActiveTintColor: 'white', tabBarIcon:({focused,color,size})=>{
              let iconName;
                iconName = focused ? 'home' : 'home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            }}} name='Home'>
              {()=><Home/>}
          </Screen>

          <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarInactiveTintColor:'lightgrey',tabBarActiveTintColor: 'white', tabBarIcon:({focused,color,size})=>{
            let iconName;
              iconName = focused ? 'time' : 'time-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }}} name='Histórico'>
            {()=><Historico/>}
          </Screen>
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}