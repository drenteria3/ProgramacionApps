import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductosView from './vistas/productos';


function Home(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Este es el inicio de Diego R.</Text>
    </View>
  );
}

function Confing(){
  return(
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>Configuraciones de la app</Text>
    </View>
  );
}

const Tab= createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Productos' component={ProductosView}/>
        <Tab.Screen name='Configuraciones' component={Confing}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}