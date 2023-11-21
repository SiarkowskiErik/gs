import { StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';

import { Login } from './components/Login.js';
import { Cadastro } from './components/Cadastro.js';
import { NovoDiagnostico } from './components/NovoDiagnostico.js';
import { Home } from './components/Home.js';
import { Historico } from './components/Historico.js';

const {Screen, Navigator} = createBottomTabNavigator();

export default function App() {
  const[logado,setLogado] = useState(true)
  return (
    
    <SafeAreaView style={{flex:1}}>
      {logado? 
      <NavigationContainer>
      <Navigator screenOptions={{
    tabBarStyle: {position:'absolute',
    bottom:25,
    left:20,
    right:20,
    elevation:5,
    backgroundColor:'#25960c',
  borderRadius:20, height:50 },
  }}>
        <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarInactiveTintColor:'lightgrey',tabBarActiveTintColor: 'white', tabBarIcon:({focused,color,size})=>{
          let iconName;
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } }} name='Diagnostico'>
          {()=><NovoDiagnostico/>}
        </Screen>
        <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarInactiveTintColor:'lightgrey',tabBarActiveTintColor: 'white', tabBarIcon:({focused,color,size})=>{
            let iconName;
              iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } }} name='Home'>
            {()=><Home/>}
          </Screen>
        <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarInactiveTintColor:'lightgrey',tabBarActiveTintColor: 'white', tabBarIcon:({focused,color,size})=>{
          let iconName;
            iconName = focused ? 'time' : 'time-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } }} name='Histórico'>
          {()=><Historico/>}
        </Screen>
      </Navigator>
      </NavigationContainer>
      
      : 
      <NavigationContainer>
        <Navigator>
          <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarActiveTintColor: '#25960c', tabBarIcon:({focused,color,size})=>{
          let iconName;
            iconName = focused ? 'log-in' : 'log-in-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } }} name='Login'>
          {()=><Login/>}
        </Screen>
          <Screen options={{ headerShown: false,tabBarShowLabel: false,tabBarActiveTintColor: '#25960c', tabBarIcon:({focused,color,size})=>{
          let iconName;
            iconName = focused ? 'log-out' : 'log-out-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        } }} name='Cadastro'>
          {()=><Cadastro/>}
        </Screen>
        </Navigator>
      </NavigationContainer>
      
      }
      {/* <Cadastro></Cadastro> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:15
  },
  input:{
    width:'70%',
    backgroundColor: '#25960c',
    color:'white',
    padding:10,
    height:50,
    borderRadius:15
  },
  title:{
    fontSize: 40,
    marginBottom:20
  },
  button:{
    width:'70%',
    height:50,
    backgroundColor: '#25960c',
    color:'white',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
  },
  chatL:{
    backgroundColor:'lightblue',
    borderRadius:10,
    width:'60%',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start',
    marginLeft: 20
  },
  chatR:{
    backgroundColor:'#6abbfc',
    borderRadius:10,
    width:'60%',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
    marginRight: 20
  },
  chatText:{
    fontSize:17,
    color:'#000'
  },
  chatInput:{
    backgroundColor:'lightblue',
    borderRadius:10,
    padding:10,
    width:'90%'
  },
  refeicao:{
    backgroundColor: 'lightblue',
    borderRadius:15,
    padding:10,
    width:'70%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:15
  },
  calendario:{
    borderWidth:1,
    borderColor:'#d9d9d9',
    borderRadius:10,
    padding:5,
    width:'100%',
    justifyContent:'space-around',
    flexDirection:'row',
    alignSelf:'center'
  }
});