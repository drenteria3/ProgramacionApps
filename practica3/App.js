import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import ProductosView from './vistas/productos';
import ProductosAdd from './vistas/productos_add';

function MyStack()  {
  return(
    <Stack.Navigator>
      <Stack.Screen name='productos' component={ProductosView} options ={{
        title:"Lista de productos",
        headerTitleAlign:"center",
      }}/>
      <Stack.Screen name='productos_add' component={ProductosAdd}/>
    </Stack.Navigator>
  )
}

function App()  {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default App;