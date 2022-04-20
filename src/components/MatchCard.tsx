import React, { Component } from "react";
import { VStack, Box, Divider } from 'native-base';

export default function MatchCard() {
  return (
    <Box bg={{
      linearGradient: {
        colors: ["lightBlue.300", "violet.800"],
        start: [0, 0],
        end: [1, 0]
      }
    }} p="12" rounded="xl" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      textAlign: "center"
    }}>
      <VStack space="4" divider={<Divider />}>
        
        <Box px="4">
          NativeBase is a free and open source framework that enable developers
          to build high-quality mobile apps using React Native iOS and Android
          apps with a fusion of ES6.
        </Box>
        <Box px="4" pb="4">
          GeekyAnts
        </Box>
      </VStack>
    </Box>
  );
}
