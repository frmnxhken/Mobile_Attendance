import React from "react";
import { View, Text } from "react-native";

import Sizes from "@/constants/Sizes";

const COLOR_MAP = {
  green: {
    bg: "#F0FDF4",
    border: "#00A63E",
    text: "#008236",
  },
  yellow: {
    bg: "#FFFBEA",
    border: "#D08700",
    text: "#894B00",
  },
  red: {
    bg: "#FFF5F5",
    border: "#E7000B",
    text: "#C10007",
  },
};

const Badge = ({ text = "Present", color = "green" }) => {
  const colorSet = COLOR_MAP[color] || COLOR_MAP.green;

  return (
    <View
      style={{
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: colorSet.bg,
        borderWidth: 1,
        borderColor: colorSet.border,
        borderRadius: 100,
      }}
    >
      <Text
        style={{
          fontSize: Sizes.action,
          fontFamily: "Inter-Regular",
          color: colorSet.text,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Badge;
