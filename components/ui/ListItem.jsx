import React from 'react'
import { View, Text } from 'react-native'
import Badge from './Badge'
import Sizes from "../../constants/Sizes";

import InGrayIcon from "../../assets/Icons/InGrayIcon";
import OutGrayIcon from "../../assets/Icons/OutGrayIcon";
import Colors from '../../constants/Colors';

const ListItem = (props) => {
  return (
    <View style={{
      backgroundColor: "white",
      borderRadius: 12,
      shadowColor: "#6F80B2",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 13,
      elevation: 13,
    }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20
        }}>
            <View>
                <Text style={{
                  fontSize: Sizes.header,
                  fontFamily: "Inter-Medium"
                }}>29 April</Text>
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 5,
                  marginTop: 5
                }}>
                  <InGrayIcon/>
                  <Text style={{
                    fontSize: Sizes.action,
                    color: Colors.gray,
                    fontFamily: "Inter-Regular",
                  }}>09:00</Text>
                </View>
            </View>
            <View>
                <Badge/>
                <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 5,
                  marginTop: 5,
                  marginRight: 2,
                  justifyContent: "flex-end"
                }}>
                  <OutGrayIcon/>
                  <Text style={{
                    fontSize: Sizes.action,
                    color: Colors.gray,
                    fontFamily: "Inter-Regular",
                  }}>15:00</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ListItem