import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import DetailSceen from '../src/screens/news/DetailSceen';
import Tabs from './tab';

const TabStacks = () => (
  <Stack.Navigator initialRouteName='Result'>
    <Stack.Screen 
      name="Result"
      component={DetailSceen}
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="Tabs"
      component={Tabs}
     
    />
  </Stack.Navigator>
)

export default TabStacks;