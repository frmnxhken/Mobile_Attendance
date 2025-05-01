import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ArrowLeftIcon from "../../assets/Icons/ArrowLeftIcon";

const HeaderBar = () => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      height: 50,
    }}>
      <Link href="/">
        <ArrowLeftIcon/>
      </Link>
      <Text style={{
        textAlign: "center",
        margin: "auto",
        paddingRight: 20
      }}>History Attendance</Text>
    </View>
  )
}

export default HeaderBar