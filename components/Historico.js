import { StyleSheet, Text, View,ScrollView, SafeAreaView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Historico = ()=>{
    const [historico,setHistorico] = useState('')
    const [isEditing,setIsEditing] = useState(false)
    const[cid,setCid] = useState('')
    const[doenca,setDoenca] = useState('')
    const[sintomas,setSintomas] = useState('')
    const[cep,setCep] = useState('')
    const[idAlteracao, setIdAlteracao] = useState('')
    const getDiagnostico = async ()=>{
        try {
            const url = 'https://localhealth-gs-default-rtdb.firebaseio.com/diagnosticos.json';
            const resp = await axios.get(url)
            setHistorico(resp.data);
        } catch (error) {
            console.error('Erro carregar diagnostico:', error);
        }
      };
    const removeDiagnostico = async (id)=>{
        try {
            const url = 'https://localhealth-gs-default-rtdb.firebaseio.com/diagnosticos/' + id + '.json';
            return await axios.delete(url)
        } catch (error) {
            console.error('Erro ao apagar diagnostico:', error);
        }
      };
      useEffect(
        ()=>{
            getDiagnostico()
            const intervalId = setInterval(getDiagnostico, 5000);
            return () => clearInterval(intervalId);
        },
      [])
      const toggleModal =(key = null)=>{
        if (key != null){
            setIsEditing(!isEditing);
            setCep(historico[key].cep)
            setCid(historico[key].cid)
            setSintomas(historico[key].sintomas)
            setDoenca(historico[key].nomedoença)
            setIdAlteracao(key)
        }
        else{
            setIsEditing(!isEditing)
            console.log('sem key')
        }
        
      }
      async function salvarAlteracoes(){
        try {
          const url = 'https://localhealth-gs-default-rtdb.firebaseio.com/diagnosticos/'+ idAlteracao +'.json';
          const data = {
                "cid": cid,
                "nomedoença": doenca,
                "sintomas":sintomas,
                "cep": cep
            };
        if (cid != '' && doenca != '' && sintomas != '' && cep != ''){
            const res = await axios.put(url, data);
            console.log(res)
            setCep('')
            setCid('')
            setSintomas('')
            setDoenca('')
            setIdAlteracao('')
            toggleModal()
        }
        else{
            console.error("Preencha todos campos")
        }
        } catch (error) {
            console.error('Erro ao salvar diagnóstico:', error);
        }
      };

    return(
        <SafeAreaView style={{flex:1}}>
            <Modal visible={isEditing} >
                <View style={{width:'100%',height:'100%',gap:15,backgroundColor:'rgba(0, 0, 0, 0.1)',justifyContent:'center',alignItems:'center'}}>
                    <View style={{alignItems:'center', justifyContent:'space-between', borderRadius:10, padding:15, flexDirection:'row', backgroundColor:"#25960c", width:'70%'}}>
                        <Text style={{color:'white', fontSize:25}}>Edição</Text>
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                            <Ionicons onPress={()=>{toggleModal()}} name='close-sharp' style={{backgroundColor:'#25960c', borderRadius:10, padding:5}} size={24} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput value={cid} onChangeText={setCid} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='CID'/>
                    <TextInput value={doenca} onChangeText={setDoenca} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Doença'/>
                    <TextInput value={sintomas} onChangeText={setSintomas} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Sintomas'/>
                    <TextInput value={cep} onChangeText={setCep} autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='CEP'/>
                    <TouchableOpacity onPress={()=>{salvarAlteracoes()}} style={styles.button}>
                        <Text style={{color:'white', fontSize:20}}>Salvar alterações</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <ScrollView contentContainerStyle={{alignItems: 'center',justifyContent: 'center',gap:15}}>
                <Text style={styles.title}>HISTÓRICO</Text>
                {Object.keys(historico).map((key) => {
                    const itemData = historico[key];
                    const doencaMaiuscula = itemData.nomedoença.toUpperCase();
                    return (
                    <View key={key} style={{ backgroundColor: '#25960c', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, padding: 20, width: '90%'}}>
                        <View style={{flexDirection:'column', width:'80%'}}>
                            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '80%', }}>
                                <Text style={ styles.subtitle }>{`${doencaMaiuscula}`}</Text>
                            </View>
                            <View style={{flexDirection:'column', width:'100%', borderRadius:20, backgroundColor:'#24753a',paddingLeft:10, paddingVertical:20}}>
                                <Text style={{color:'white', fontSize:15}}>{`CID: ${itemData.cid}`}</Text>
                                <Text style={{color:'white', fontSize:15}}>{`Sintomas: ${itemData.sintomas}`}</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'space-around', flexDirection:'column', gap:15}}>
                            <Ionicons onPress={()=>{removeDiagnostico(key)}} style={{backgroundColor:'#24753a', borderRadius:10, padding:10}} name='close-sharp' color={'white'} size={24}></Ionicons>
                            <Ionicons onPress={()=>{toggleModal(key)}} style={{backgroundColor:'#24753a', borderRadius:10, padding:10}} name='pencil' color={'white'} size={20}></Ionicons>
                        </View>
                    </View>
                    );
                    })}
                <View style={{width:'100%', height:80}}></View>
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
        marginTop:40,
        color:'#25960c',
        fontWeight:'500',
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
        marginBottom:15,
        marginTop:5
    }
    });