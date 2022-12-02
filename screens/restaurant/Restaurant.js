import { StyleSheet, Text, View } from 'react-native'
import React ,{ useLayoutEffect }from 'react'


export default function Restaurant({navigation,route}) {
    const {id,name}=route.params
    useLayoutEffect(() => {
      navigation.setOptions( { title: name } )
}, []);
   
  return (
    <View>
      <Text>Restaurant...</Text>
    </View>
  )
}

const styles = StyleSheet.create({})