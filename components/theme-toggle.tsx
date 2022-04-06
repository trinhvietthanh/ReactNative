import React from 'react'
import { HStack, Text, Switch, useColorMode } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Text>Dark</Text>
      <Switch isChecked={colorMode==='light'} onToggle={toggleColorMode}></Switch>
      <Text>Light</Text>
    </HStack>

  )
}