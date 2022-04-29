import React, { Component } from "react";
import { VStack, Box, Divider, Center, Stack,Heading, Text, HStack } from 'native-base';
import { StyleSheet } from 'react-native';

export default function MatchCard() {
  return (
<Box alignItems="center">
      <Box maxW="80" rounded="3xl" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Stack p="4" space={3}>
          
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

const styles =  StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
  },
})