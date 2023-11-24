import { StyleSheet, Text, View,ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Historico = ()=>{
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
        ()=>{getDiagnostico()
            const intervalId = setInterval(getDiagnostico, 5000);
            return () => clearInterval(intervalId);
        },
      [])
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={{alignItems: 'center',
        justifyContent: 'center',gap:15}}>
                <Text style={styles.title}>Historico</Text>
                {Object.keys(historico).map((key) => {
                        const itemData = historico[key];
                        const doencaMaiuscula = itemData.nomedoença.toUpperCase(); // Converte para maiúsculas

                        return (
                        <View key={key} style={{ backgroundColor: '#25960c', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 20, padding: 20, width: '90%'}}>
                            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '80%' }}>
                            <Text style={ styles.subtitle }>{`${doencaMaiuscula}`}</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{color:'white'}}>{`CID: ${itemData.cid}`}</Text>
                                <Text style={{color:'white'}}>{`Sintomas: ${itemData.sintomas}`}</Text>

                            </View>
                        </View>
                        );
                    })}
                {/* <View style={{backgroundColor:'#25960c',flexDirection:'row',justifyContent:'space-between', borderRadius:20, padding:20, width:'90%',shadowColor: "#000",shadowOffset: {width: 0,height: 0,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
                    <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row', width:'80%',}}>
                        <Text style={{color:'white', fontSize:18}}>#432134 - Dengue</Text>
                        <Text style={{color:'white', fontSize:18}}>18/11</Text>
                    </View>
                    <Ionicons name={'caret-down-sharp'} size={20} color={'white'} />
                </View>
                
                <View style={{backgroundColor:'#25960c',flexDirection:'row',justifyContent:'space-between', borderRadius:20, padding:20, width:'90%',shadowColor: "#000",shadowOffset: {width: 0,height: 0,},shadowOpacity: 0.44,shadowRadius: 10.32,elevation: 16,}}>
                    <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row', width:'80%',}}>
                        <Text style={{color:'white', fontSize:18}}>#432134 - Dengue</Text>
                        <Text style={{color:'white', fontSize:18}}>18/11</Text>
                    </View>
                    <Ionicons name={'caret-down-sharp'} size={20} color={'white'} />
                </View>
                 */}
            </ScrollView>
        </SafeAreaView>
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
        marginBottom:20,
        marginTop:20
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
    subtitle:{
        color:'white',
        fontSize: 26,
        marginBottom:5,
        marginTop:5
    }
    });