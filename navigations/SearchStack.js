import React from 'react'
import Search from '../screens/Search'
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()
export default function SearchStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen
             name='search'
             component={Search}
             options={{title:"Buscar"}}
            />

            
      </Stack.Navigator>
    
  )
}