import { View, Text, Image, StyleSheet } from 'react-native'
import Title from './Title'
import React from 'react'
import { WebView } from 'react-native-webview';
import { Box, Stack, Heading, Center, AspectRatio, HStack, Divider, Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'; 

interface Props {
  title: string,
  description: string,
  // image: string,

}

export default function BlockCard(props: Props) {
  return (
    <Box alignItems="center" style={styles.container}>
    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
    borderColor: "coolGray.600",
    backgroundColor: "gray.700"
  }} _web={{
    shadow: 2,
    borderWidth: 0
  }} _light={{
    backgroundColor: "gray.50"
  }}>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
        }}  />
        </AspectRatio>
        <Center bg="violet.500" _dark={{
        bg: "violet.400"
      }} _text={{
        color: "warmGray.50",
        fontWeight: "700",
        fontSize: "xs"
      }} position="absolute" bottom="0" px="3" py="1.5">
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {props.title}
          </Heading>
          <Text>
            {props.description}
          </Text>
        </Stack>
       
        <Divider my={2} bg="#e0e0e0" />
        <HStack alignItems="center" space={2} justifyContent="space-between">
          <HStack  style={styles.bottomContainer}>
        
          <FontAwesome name="thumbs-o-up" size={24} color="black" />
       
          </HStack>
          <HStack  style={styles.bottomContainer}>
          
          <FontAwesome name="commenting-o" size={24} color="black" />

          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  contentContainer: {
    padding: 5,
  },
  bottomContainer: {
    alignItems: 'center'
  }
})