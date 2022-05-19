import React from 'react'
import Restaurants from '../screens/Restaurants'
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()
export default function RestaurantsStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen
             name='restaurants'
             component={Restaurants}
             options={{title:"Restaurantes 1"}}
            
            />

            
      </Stack.Navigator>
    
  )
}