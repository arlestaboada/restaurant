import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button,Input} from "react-native-elements"

export default function RegisterForm() {
  return (
    <View style={styles.form}>
        <Input
           containerStyle={styles.input}
           placeholder="Ingresa tu email..."
        />
        <Input
        containerStyle={styles.input}
        placeholder="Ingresa tu contraseña..."
        
        />
        <Input
        containerStyle={styles.input}
        placeholder="Confirma tu contraseña..."
        
        />
        <Button
          title="Registrar Nuevo Usuario"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
        />

    </View>
  )
}

const styles = StyleSheet.create({

    form:{
        marginTop:30
    },
    input:{
        width:"100%"
    },
    btnContainer:{
        marginTop:20,
        width:"95%",
        alignSelf:"center"

    },
    btn:{
        backgroundColor:"#442484"
    }
})