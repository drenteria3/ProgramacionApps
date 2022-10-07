import React from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

const CreateUserScreen = () => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Escribe tu nombre"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Escribe tu E-mail"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Escribe tu Usuario"/>
            </View>
            <View>
                <Button title="Registrar"/>
            </View>
        </ScrollView>    
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:35
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
})

export default CreateUserScreen