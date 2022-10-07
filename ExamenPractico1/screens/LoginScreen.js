import React from "react";
import { View, Text } from "react-native";

const LoginScreen = () => {
    return(
        <View>
            <Text>Hola</Text>
        </View>
    )
}

export default LoginScreen

/*import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { auth } from "../db/firebase";

const LoginScreen = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleSingUp= ()=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(UserCredentials =>{
            const user= UserCredentials.user;
            console.log(user.email);
        }) 
        .catch(error => alert(error.message))
    }

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={text =>setEmail(text)}
                    style={styles.input}
                />
                <TextInput/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={text =>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSingUp}
                    style={[styles.button, styles.buttonOutLine]}
                >
                    <Text style={styles.buttonOutLineText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEAEA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer:{
        with:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor:'#0782F9',
        with: '100%',
        padding:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonOutLine:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor:'#0782F9',
        borderWidth: 2,
    },
    buttonOutLineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
  }); */



  