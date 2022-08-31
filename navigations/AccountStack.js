import React from 'react'
import Account from '../screens/account/Account'
import {createStackNavigator} from '@react-navigation/stack'
import login from '../screens/account/login'

const Stack=createStackNavigator()
export default function AccountStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen
             name='account'
             component={Account}
             options={{title:"Cuenta"}}
            />

            <Stack.Screen
             name='login'
             component={login}
             options={{title:"Iniciar Sesión"}}
            />

            
      </Stack.Navigator>
    
  )
}