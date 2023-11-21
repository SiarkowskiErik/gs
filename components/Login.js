import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';

export const Login = (props)=>{
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState('');

    return(
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-certo-verde.png')}
        style={{width:92,height:90,}}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput autoCapitalize="none" maxLength={2} autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Estado do CRM'/>
      <TextInput autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Numero do CRM'/>
      <TextInput value={password} onChangeText={setPassword} autoCapitalize="none" secureTextEntry={hidePass ? true : false} autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Senha' />
      {/* <View style={{display:'flex', flexDirection:'row',justifyContent:'space-around', width:'70%'}}>
        <Text style={{textDecorationLine:'underline'}}>Não tenho uma conta</Text>
        <Text style={{textDecorationLine:'underline'}}>Esqueci minha senha</Text>
      </View> */}
      <TouchableOpacity  style={styles.button}><Text style={{color:'white'}}>entrar</Text></TouchableOpacity>
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
    marginTop:15,
    width:'70%',
    height:50,
    backgroundColor: '#25960c',
    color:'white',
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
}
});