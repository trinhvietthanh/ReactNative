import { View, Text } from 'react-native'
import { Box, Button, HStack, Link, IconButton, Heading, VStack, FormControl, Input } from 'native-base'
import React from 'react'

export default function SignUpScreen() {
  return (
    <Box safeArea flex={1} p={2} w="90%" mx='auto'>
    <Heading size="lg" color='primary.500'>
      Welcome
    </Heading>
    <Heading color="muted.400" size="xs">
      Sign up to continue!
    </Heading>

    <VStack space={2} mt={5}>
      <FormControl>
        <FormControl.Label _text={{
        color: 'muted.700',
        fontSize: 'sm',
        fontWeight: 600
      }}>
            Email
        </FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label _text={{
        color: 'muted.700',
        fontSize: 'sm',
        fontWeight: 600
      }}>
            Password
        </FormControl.Label>
        <Input type="password" />
      </FormControl>
      <FormControl>
        <FormControl.Label _text={{
        color: 'muted.700',
        fontSize: 'sm',
        fontWeight: 600
      }}>
           Confirm Password
        </FormControl.Label>
        <Input type="password" />
      </FormControl>
      <VStack space={2} mt={5}>
      <Button colorScheme="cyan" _text={{
        color: 'white'
      }}>
          SignUp
      </Button>
      </VStack>
    </VStack>
  </Box>
  )
}