import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

const Badge = () => {
  return (
    <View style={{
      paddingVertical: 2,
      paddingHorizontal: 8,
      backgroundColor: "#F0FDF4",
      borderWidth: 1,
      borderColor: Colors.green,
      borderRadius: 100,
    }}>
      <Text style={{
        fontSize: Sizes.action,
        fontFamily: "Inter-Regular",
        color: Colors.green
      }}>Present</Text>
    </View>
  )
}

export default Badge