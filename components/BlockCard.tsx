import { View, Text, Image, StyleSheet } from 'react-native'
import Title from './Title'
import React from 'react'
import { WebView } from 'react-native-webview';


export default function BlockCard() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/adaptive-icon.png')} style={styles.image}/>
      <View style={styles.contentContainer}>
        <Title>Some title</Title> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200
  },
  contentContainer: {
    padding: 5,
  }
})