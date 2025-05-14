import React, { useEffect, useState } from 'react'

import { SafeAreaView, Text, View, ScrollView, StyleSheet } from "react-native";

import HeaderBar from "@/components/ui/HeaderBar";
import MessageCard from "@/components/ui/MessageCard";

import Sizes from "@/constants/Sizes";
import Colors from "@/constants/Colors";
import { getExcuses } from '@/services/ExcuseService';

const index = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExcuses().then(response => {
        setData(response.data)
    }).finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <HeaderBar name="Notification" />
      </View>
      <ScrollView>
        <View style={styles.container}>
          { data?.map((excuse, index) => (
            <MessageCard
              key={index}
              status={excuse.status}
              content={excuse.reason}
              date={excuse.date}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 15,
  },
  headerContainer: {
    paddingHorizontal: 15
  },
  wrapText: {
    gap: 20,
    alignItems: "center",
  },
  Title: {
    fontSize: 20,
    fontWeight: '700',
    fontSize: Sizes.title,
    fontFamily: "Inter-SemiBold",
  },
  Description: {
    paddingHorizontal: 20,
    color: Colors.gray,
    fontSize: Sizes.action,
    fontFamily: "Inter-Regular",
    textAlign: 'center',
  }
});

export default index