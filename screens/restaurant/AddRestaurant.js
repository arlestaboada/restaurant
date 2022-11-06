import React ,{useState,useRef}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toast from "react-native-easy-toast"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'

import AddRestaurantForm from '../../components/restaurants/AddRestaurantForm'


export default function AddRestaurant() {
    const [loading, setLoading] = useState(false)
    const toastRef=useRef()
  return (
    <KeyboardAwareScrollView>
      <AddRestaurantForm toastRef={toastRef} setLoading={setLoading}/>
      <Loading isVisible={loading} text="Creando restaurante ..."/>
      <Toast ref={toastRef} position="center" opacity={0.9}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})