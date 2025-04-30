import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Colors from '../../constants/Colors'
import Sizes from '../../constants/Sizes'

const CalendarSlide = () => {
    const weekData = [
        { date: "28", day: "Mon" },
        { date: "29", day: "Tue" },
        { date: "30", day: "Wed", active: true },
        { date: "01", day: "Thu" },
        { date: "02", day: "Fri" },
        { date: "03", day: "Sat" },
        { date: "04", day: "Sun" },
    ];
      
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 20,
            }}
            style={{
                paddingHorizontal: 15,
                paddingVertical: 20,
            }}
        >
            <View style={{
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                columnGap: 10,
            }}>
                {weekData.map((data, index) => (
                    <View key={index} style={{
                        width: 58,
                        height: 58,
                        backgroundColor: data.active ? Colors.green : "#fff" ,
                        shadowColor: "#6F80B2",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        elevation: 10,
                        aspectRatio: 1,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        // borderWidth: 1,
                    }}>
                        <Text style={{
                            fontSize: Sizes.title,
                            fontFamily: "Inter-SemiBold",
                            color: data.active ? "#fff" : "#000"
                        }}>{data.date}</Text>
                        <Text style={{
                            fontSize: Sizes.action,
                            fontFamily: "Inter-Regular",
                            color: data.active ? "#fff" : Colors.gray
                        }}>{data.day}</Text>
                    </View>)
                )}
            </View>
        </ScrollView>
    )
}

export default CalendarSlide