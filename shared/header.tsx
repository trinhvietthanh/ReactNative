import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Heading} from "native-base";


export default function Header() {
  return (
    <Heading style={{ backgroundColor: '#f8f8f8', alignItems: 'center', justifyContent: 'center' }}>
             12312
        </Heading>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  }
})