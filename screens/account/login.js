import { StyleSheet, Text, View,ScrollView,Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

export default function login() {
  return (
    <ScrollView>
      <Image
      source={require("../../assets/arlestaboada.png")}
      resizeMode="contain"
      style={styles.image}
      
      />
      <View style={styles.container}>
        <Text>Login Form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider}/>

    </ScrollView>
  )
}

function CreateAccount(props){
  return (
    <Text 
    style={styles.register}
    onPress={()=>console.log("caramba")}
    >
      ¿ Aún no tienes una cuenta?{" "}
      <Text style={styles.btnRegister}>
        Registrate
      </Text>
    </Text>
    
  )
}

const styles = StyleSheet.create({
  image:{
    height:150,
    width:"100%",
    marginBottom: 20,
   

  },
  container:{
    marginHorizontal:40
  },
  divider:{
    backgroundColor:"#442484",
    margin:40

  },
  register:{
    marginTop:15,
    marginHorizontal:10,
    alignSelf:"center"
  },
  btnRegister:{
    color:"#442484",
    fontWeight:"bold"

  }
})