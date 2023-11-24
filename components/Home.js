import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput,Image,ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { PieChart } from 'react-native-chart-kit';

export const Home = ()=>{
    const[temDiagnostico,setTemDiagnostico] = useState()
    const [historico,setHistorico] = useState('')
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    if (historico!=''){
        const countNomedoenca = {};

        // Percorra os elementos do JSON e conte as ocorrências de nomedoença
        Object.keys(historico).forEach((key) => {
        const itemData = historico[key];
        const nomedoenca = itemData.nomedoença;

        // Se já existe uma contagem para esse nomedoença, incremente
        if (countNomedoenca[nomedoenca]) {
            countNomedoenca[nomedoenca]++;
        } else {
            // Se não existe, inicialize a contagem como 1
            countNomedoenca[nomedoenca] = 1;
        }
        });
        var data = Object.keys(countNomedoenca).map((nomedoenca) => ({
            name: nomedoenca,
            population: countNomedoenca[nomedoenca],
            color: getRandomColor(),
            legendFontColor: 'black',
            legendFontSize: 15,
          }));
    }
    const getDiagnostico = async ()=>{
        try {
            const url = 'https://localhealth-gs-default-rtdb.firebaseio.com/diagnosticos.json';
            const resp = await axios.get(url)
            setHistorico(resp.data);
        } catch (error) {
            console.error('Erro carregar diagnostico:', error);
        }
      };
      useEffect(() => {
        // Executa a função fetchData imediatamente
        getDiagnostico();
    
        const intervalId = setInterval(getDiagnostico, 5000);
        return () => clearInterval(intervalId);
      }, []);
      
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
            historico == ''?
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
                <PieChart
        data={data}
        width={400}
        height={260}
        chartConfig={{
          backgroundColor: '#e1e1e1',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
                
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