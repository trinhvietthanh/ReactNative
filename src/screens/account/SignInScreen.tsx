import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from "react-native";
import {
  Box,
  Button,
  Heading,
  VStack,
  FormControl,
  Input,
} from "native-base";
import React from "react";

export default function SignInScreen({ navigation }: any) {
  return (
    <Box safeArea flex={1} p={2} w="90%" mx="auto">
      <Heading size="lg" color="primary.500">
        Welcome
      </Heading>
      <Heading color="muted.400" size="xs"></Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{
              color: "muted.700",
              fontSize: "sm",
              fontWeight: 600,
            }}
          >
            User Name
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mb={5}>
          <FormControl.Label
            _text={{
              color: "muted.700",
              fontSize: "sm",
              fontWeight: 600,
            }}
          >
            Password
          </FormControl.Label>
          <Input type="password" />
        </FormControl>
        <VStack space={2}>
          <Button
            colorScheme="cyan"
            _text={{
              color: "white",
            }}
          >
            Sign In
          </Button>
          <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
        </VStack>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  },
});
