import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import ArrowLeftIcon from "../../assets/Icons/ArrowLeftIcon";

const HeaderBar = (props) => {
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
        paddingRight: 20,
        fontFamily: "Inter-Medium"
      }}>{props.name}</Text>
    </View>
  )
}

export default HeaderBar