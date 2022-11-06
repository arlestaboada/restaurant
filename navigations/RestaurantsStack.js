import React from 'react'
import Restaurants from '../screens/restaurant/Restaurants'
import {createStackNavigator} from '@react-navigation/stack'
import AddRestaurant from '../screens/restaurant/AddRestaurant'

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

            <Stack.Screen
             name='add-restaurant'
             component={AddRestaurant}
             options={{title:"Crear Restaurante"}}
            
            />

            
      </Stack.Navigator>
    
  )
}