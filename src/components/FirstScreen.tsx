import { Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const FirstScreen = ({navigation}:any) => {
    const click=()=>{
        navigation.navigate('Secondpage')
    }
  return (
    <View>
        <TouchableHighlight onPress={click}>
      <Text>From first to second</Text>
        </TouchableHighlight>
    </View>
  )
}

export default FirstScreen
