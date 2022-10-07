import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {Input} from 'react-native-elements';
import {collection, addDoc, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';
import {firebaseConfig} from './db/firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';


import { padding } from 'styled-system';

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default function App () {

    const [data, setdata] = useState({
      username:"",
      email:"",
      psw:"",
      createdAt: new Date(),
    });

    const changeText = (key, value) => {
      setdata({...data, [key]: value});
    }

    const Agregar = () => {
      if(data.psw != data.psw){
        Alert.alert('La contraseña debe de coincidir...')
      }else if(data.username == '' || data.email == ''){
        Alert.alert('Nombre de usuario y/o emali, son obligatorios.!')
      }else{
        onSend(data);
      }
    }

    const onSend = async() => {
      const docRef = await addDoc(collection(db, 'usuarios/'),data);
    }

    /*const onUsersDB = async (id) => {
      const docRef = doc(db, "usuarios",id);
      const docSnap = await getDoc(docRef);
      if( docSnap.exists()){
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    }*/

    const allUsers = async() => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });

    }


  return (<>
    <View style={{textAlign:'center', width:200}}>
      <Text style={{fontSize:20, padding:30}}>Registro de alumno</Text>
    </View>
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <View>
        <Input placeholder='Nombre usuario' style={styles.input} onChangeText={(value) => changeText('username', value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder='Correo electrónico' style={styles.input} onChangeText={(value) => changeText('email', value)}/>
      </View>
      <View>
        <Input placeholder='Contraseña' style={styles.input} onChangeText={(value) => changeText('psw', value)} secureTextEntry={true}/>
      </View>
      <View>
        <Input placeholder='Confirma contraseña' style={styles.input} onChangeText={(value) => changeText('psw2', value)} secureTextEntry={true}/>
      </View>
      <View  style={styles.buttonText}>
        <Button color='green' onPress={() => {Agregar()}} title="Enviar datos"/>
      </View>
      <View style={styles.buttonOutLineText}>
        <Button color='gray' onPress={() => {allUsers();}} title="Ver datos"/>
      </View>
    </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutLineText:{
    color:'#0782F9',
    fontWeight:'700',
    fontSize:16,
    padding:10,
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,
    padding:10,
  }
});
