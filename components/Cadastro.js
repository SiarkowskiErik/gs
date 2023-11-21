import {Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Cadastro = (props)=>{
    return(
    <View style={styles.container}>
        <Image
            source={require('../assets/logo-certo-verde.png')}
            style={{width:92,height:90,}}
        />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Nome completo'/>
      <TextInput autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Estado do CRM'/>
      <TextInput autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Numero do CRM'/>
      <TextInput autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Senha'/>
      <TextInput autoCapitalize="none" autoCorrect={false} style={styles.input} placeholderTextColor="white" placeholder='Confirme sua senha'/>
      {/* <Text style={{textDecorationLine:'underline'}}>Já tenho uma conta</Text> */}
      <TouchableOpacity style={styles.button}><Text style={{color:'white'}}>Cadastrar</Text></TouchableOpacity>
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