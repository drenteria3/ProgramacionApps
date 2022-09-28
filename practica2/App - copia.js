import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Alert, Button} from "react-native";

const Separator = () => (
  <View style={page.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={page.container}>
    <View>
      
      <Text style={flattenStyle}>React Native</Text>
      <Text>Estilo:</Text>
      <Text style={page.code}>
        {JSON.stringify(flattenStyle, null, 2)}
      </Text>
    </View>

    <Separator />

    <View style={page.fixToText}>
    <Button
        title="Left button"
        onPress={() => Alert.alert('Izq')}
      />
      <Button
        title="Right button"
        onPress={() => Alert.alert('Der')}
      />
    </View>

    <View style={page.container}>
      <Switch
        trackColor={{ false: "#1F7100", true: "#4FEB19" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={modalCSS.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Se cerró el modal");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalCSS.centeredView}>
          <View style={modalCSS.modalView}>
            <Text style={modalCSS.modalText}>Hola mundo!</Text>
            <Pressable
              style={[modalCSS.button, modalCSS.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalCSS.textStyle}>Esconder Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalCSS.button, modalCSS.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalCSS.textStyle}>Mostrar Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const modalCSS = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#5632F5",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#A3CDD4",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#FFFFED"
  },
  tinyLogo: {
    width: 90,
    height: 90,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const typography = StyleSheet.create({
  header: {
    color: "#05C3DD",
    fontSize: 30,
    marginBottom: 36
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);
