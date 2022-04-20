import { View, Text } from "react-native";
import {
  VStack,
  Box,
  Input,
  Divider,
  Icon,
  Stack,
  Center,
  Heading,
  ScrollView,
  HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import BlockCard from "../../components/BlockCard";
export default function UCLSceen() {
  return (
    <Box>
      <ScrollView>
        <VStack>
          <Stack direction="row" mb="2.5" mt="1.5" space={4}>
            <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              ENG
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              SPAIN
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              ITALY
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              FRANCE
            </Center>
          </Stack>
        </VStack>
      </ScrollView>
      <VStack
        my="4"
        space={5}
        w="100%"
        maxW="300px"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            borderWidth="0"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>

      <VStack space={3} divider={<Divider />} w="90%">
  <HStack justifyContent="space-between">
    <Text>Simon Mignolet</Text>
    <Icon name="arrow-forward" />
  </HStack>
  <HStack justifyContent="space-between">
    <Text>Nathaniel Clyne</Text>
    <Icon name="arrow-forward" />
  </HStack>
  <HStack justifyContent="space-between">
    <Text>Dejan Lovren</Text>
    <Icon name="arrow-forward" />
  </HStack>
</VStack>
    </Box>
  );
}
