import React, { useContext, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import  stackConfigs, { STACK_HOME, STACK_LOGIN } from './stack';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './account/SignInScreen';
import DetailSceen from './news/DetailSceen';


const Stack = createStackNavigator();

//Routes does not require logged in
const publicRoutes = new Set(STACK_LOGIN)

// Routes can not access while logged in
const entryRoutes = new Set(STACK_LOGIN);

const StackScreens = () => {
  const navigation = useNavigation();
  const currentRoute = navigation.getCurrentRoute()?.name;
  // const { isLogin } = useContext();

  useEffect(() => {
    if(entryRoutes.has(currentRoute)) {
      navigation.navigate(STACK_HOME)
    }
  }, [currentRoute, navigation])

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={stackConfigs.LOGIN.name}
        options={stackConfigs.LOGIN.options}
        component={SignInScreen}
      />
      <Stack.Screen 
        name={stackConfigs.HOME.name}
        options={stackConfigs.HOME.options}
        component={DetailSceen}
      />
    </Stack.Navigator>
  )
}