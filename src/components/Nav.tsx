

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';


const Stack=createStackNavigator()
const Nav = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="First Screen"
          component={FirstScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Secondpage"
          component={SecondScreen}
          options={{
            headerShown: false,
          }}
        />
       
       
      </Stack.Navigator>
  )
}

export default Nav