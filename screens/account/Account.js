import React,{useState,useEffect} from 'react'
//rnfs
import { StyleSheet, Text, View } from 'react-native'
import "firebase/compat/auth"
import UserGuest from "./UserGuest"
import UserLogued from "./UserLogued"
import Loading from "../../components/Loading"
import {isUserLogged} from "./../../utils/actions"


export default function Account() {
  const [login,setLogin]=useState(null)
  useEffect(() => {

    setLogin(isUserLogged)
    
  }, [])
  
 if(login==null){
    return   <Loading isVisible={true} text="Cargando ..."/>
 }
  return login ? <UserLogued/> : <UserGuest/>
}

const styles = StyleSheet.create({})