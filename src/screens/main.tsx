import React from "react";
import { Text, Box, Center, VStack, themeTools, useTheme } from "native-base";

export default function Main() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box width={30}>
          <Text>Hello</Text>
        </Box>
      </VStack>
    </Center>
  );
}
