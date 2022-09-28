import React, {useState} from "react";
import { StyleSheet, View, Button, ScrollView, Alert } from "react-native";
import {Input} from 'native-base';
import { collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import {db} from './firebase_config';


export default function App(){
  const [data, setdata] = useState({
    username:"",
    email:"",
    psw:"",
    createAt:new Date(),
  });

  const changeText = (key, value) =>{
    setdata ({...data, [key]: value});
  }

  const Agregar = () => {
    if(data.psw != data.psw2){
      Alert.alert('La contraseña no coincide...')
    }else if(data.username == '' || data.email == ''){
      Alert.alert('El nombre de usuario y el e-mail son obligatorios >:(')
    }else{
      onSend(data);
    }
  }

  const onSend = async ()=>{
    const docRef =await addDoc(collection(db,'usuarios'),data);
  }

  const onUsersDB = async ()=> {
    const docRef = doc(db,"usuarios",'ylmdGisJb4tijcdR4GIi');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
      console.log("Document data:",docSnap.data());
    }else {
      console.log("No such document");
    }
  };

  const allUsers = async()=>{
    const querySnapshot = await getDocs(collection(db,"usuarios"));

    querySnapshot.forEach((doc) =>{
      console.log(doc.id,"=>",doc.data());
    });
  }

  return(

    <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:'center'}}>
      <View>
        <Input placeholder="Nombre de usuario" style={styles.input} onChangeText={(value) => changeText('username',value)} value={data.username}/>
      </View>
      <View>
        <Input placeholder="Correo electrónico" style={styles.input} onChangeText={(value) => changeText('email',value)}/>
      </View>
      <View>
        <Input placeholder="contraseña" style={styles.input} onChangeText={(value) => changeText('psw',value)} secureTextEntry={true}/>
      </View>
      <View>
        <Input placeholder="Confirmar contraseña" style={styles.input} onChangeText={(value) => changeText('psw2',value)} secureTextEntry={true}/>
      </View>
      <View>
        <Button 
          onPress={()=>{
            Agregar()
          }}
          title="Enviar datos"
          color="#841584"
        />
      </View>
      <View>
        <Button
          onPress={()=>{
            onUsersDB();
          }}
          title="Ver Datos"
          color="#841584"
        />
      </View>
    </ScrollView>

  );

}
