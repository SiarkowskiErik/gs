import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export const NovoDiagnostico = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de doença</Text>
            <TextInput autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='CID'/>
            <TextInput autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Doença'/>
            <TextInput autoCapitalize="none" autoCorrect={false} placeholderTextColor="white" style={styles.input} placeholder='Sintomas'/>
            <TouchableOpacity style={styles.button}><Text style={{color:'white'}}>enviar</Text></TouchableOpacity>
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