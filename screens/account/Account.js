import React,{useState} from 'react'
//rnfs
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import {firebaseApp }from '../../utils/firebase'

import UserGuest from "./UserGuest"
import UserLogued from "./UserLogued"


export default function Account() {
  const [login,setLogin]=useState(null)
  firebaseApp
  const auth = firebase.auth();

  auth.onAuthStateChanged(user => { 
    user!==null ? setLogin(false):setLogin(true)
  });
  
  if(login==null){
    return <Text>Cargando ...</Text>
  }
  return login ? <UserLogued/> : <UserGuest/>
}

const styles = StyleSheet.create({})