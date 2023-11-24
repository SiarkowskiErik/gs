import axios from 'axios';
import { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Cadastro = (props)=>{
    const[crm,setCrm] = useState('')
  const[nomeMedico,setNomeMedico] = useState('')
  const[email,setEmail] = useState('')
  const[senha,setSenha] = useState('')


  const cadastrarMedico = async ()=>{
    try{
      const url = 'https://api.adviceslip.com/advice'
      const data = {
        "crm:": crm,
        "nmMedico": nomeMedico,
        "email": email,
        "senha": senha
      }
      console.log(data)
      const response = await axios.get(url)
      console.log(response.data)
    }
    catch (error){
      console.error('Erro ao cadastrar médico ', error)
    }
  }
    return(
    <View style={styles.container}>
        <Image
            source={require('../assets/logo-certo-verde.png')}
            style={{width:92,height:90,}}
        />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput value={nomeMedico} onChangeText={setNomeMedico} autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Nome completo'/>
      <TextInput value={crm} onChangeText={setCrm} autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='CRM'/>
      <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Email'/>
      <TextInput value={senha} secureTextEntry={true } onChangeText={setSenha} autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Senha'/>
      {/* <Text style={{textDecorationLine:'underline'}}>Já tenho uma conta</Text> */}
      <TouchableOpacity onPress={cadastrarMedico} style={styles.button}><Text style={{color:'white'}}>Cadastrar</Text></TouchableOpacity>
    </View>
    )
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
});