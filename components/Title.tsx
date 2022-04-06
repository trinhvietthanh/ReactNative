import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title({ children, numberOfLines = 2, size = 18 }: any) {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        style={{ fontWeight: "bold", fontSize: size }}
      >
        {children}
      </Text>
    </View>
  );
}
