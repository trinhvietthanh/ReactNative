import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons,Entypo } from '@expo/vector-icons'; 

import Header from "../shared/header";
import DetailSceen from "../screens/news/DetailSceen";
import SignInScreen from "../screens/account/SignInScreen";
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      headerTitleAlign: 'center',
    }}
    >
      
      <Tab.Screen name="News" component={DetailSceen} 
        options={{
          tabBarLabel: 'News',
          headerShadowVisible: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Transfer"  options={{
          tabBarLabel: 'Transfer',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="swap-horizontal-circle" size={size} color={color} />
          ),
        }} component={DetailSceen}/>
      <Tab.Screen name="UCL"  options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/icons/UCL.png')}  resizeMode="contain" style={{
              width: 30,
              height: 30,
              
            }} />
          ),
        }}component={DetailSceen}/>
      <Tab.Screen name="Score" component={DetailSceen}  options={{
          tabBarLabel: 'Score',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={SignInScreen}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  )
}

export default Tabs