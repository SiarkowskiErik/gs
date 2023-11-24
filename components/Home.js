import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Image,ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
export const Home = ()=>{
    const[temDiagnostico,setTemDiagnostico] = useState(false)
    const [historico,setHistorico] = useState('')
    const getDiagnostico = async ()=>{
        try {
            const url = 'https://localhealth-gs-default-rtdb.firebaseio.com/diagnosticos.json';
            const resp = await axios.get(url)
            setHistorico(resp.data);
        } catch (error) {
            console.error('Erro carregar diagnostico:', error);
        }
      };
      useEffect(
        ()=>{
            getDiagnostico()
            if (historico != ''){
                setTemDiagnostico(true)
            }
            const intervalId = setInterval(getDiagnostico, 5000);
            return () => clearInterval(intervalId);
        }, 
      [])
    return(
        <View style={{flex:1}}>
            <View style={{marginTop:'9%',marginLeft:'4%', flexDirection:'row', gap:15,alignItems:'center', position:'absolute'}}>
                <Image
                    source={require('../assets/profilepicture.jpg')}
                    style={{borderRadius:50, width:60,height:60}}
                />
                <Text style={{fontSize:25, textAlign:'center'}}>Bem vindo <Text style={{color:'#25960c'}}>Erik!</Text></Text>
            </View>
        {
            !temDiagnostico?
                <View style={{flex:1,marginTop:50, alignItems:'center', justifyContent:'center', gap:15}}>
                    <Image
                        source={require('../assets/nohistory.png')}
                        style={{borderRadius:15, margin:10, width:100,height:100}}
                    />
                    <Text style={styles.warning}>Você não realizou envio de nenhum diagnóstico ainda...</Text>
                    <Text style={styles.warning}>Aqui será exibido um overview das regiões e suas princpais doenças.</Text>
                </View>
            :
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.warning}>Tem diagnostico...</Text>
            </View>
        }
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
    warning:{
        fontSize:20,
        fontFamily:'sans-serif-medium',
        textAlign:'center',
        width:'80%',
        color:'#88898a'
    }

    });