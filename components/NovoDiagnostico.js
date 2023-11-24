import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export const NovoDiagnostico = ()=>{
    const[cid,setCid] = useState('')
    const[doenca,setDoenca] = useState('')
    const[sintomas,setSintomas] = useState('')
    const[cep,setCep] = useState('')
    
    async function postDiagnostico(){
        try {
          const url = 'https://localhealth-gs-default-rtdb.firebaseio.com/diagnosticos.json';
          const data = {
                "cid": cid,
                "nomedoença": doenca,
                "sintomas":sintomas,
                "cep": cep
            };
        console.log(data)
          if (cid != '' && doenca != '' && sintomas != '' && cep != ''){
            const response = await axios.post(url, data);
          }
          else{
            console.error("Preencha todos campos")
          }
        } catch (error) {
          console.error('Erro ao salvar diagnóstico:', error);
        }
      };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de diagnostico</Text>
            <TextInput value={cid} onChangeText={setCid} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='CID'/>
            <TextInput value={doenca} onChangeText={setDoenca} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Doença'/>
            <TextInput value={sintomas} onChangeText={setSintomas} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Sintomas'/>
            <TextInput value={cep} onChangeText={setCep} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='CEP'/>
            <TouchableOpacity onPress={()=>{postDiagnostico()}} style={styles.button}><Text style={{color:'white'}}>enviar</Text></TouchableOpacity>
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