//rnfs
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import {useNavigation} from "@react-navigation/native"
import { closeSession } from '../../utils/actions'

export default function UserLogued() {
  const navigation=useNavigation();
  return (
    <View>
      <Text>UserLogued ...</Text>
      <Button
      title="Cerrar Sesión"
      onPress={()=>{
        closeSession()
        navigation.navigate("restaurants-nav")
        
      }}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({})