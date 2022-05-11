import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";

import Header from "../shared/header";
import DetailNewsSceen from "../src/screens/news/DetailSceen";
import DetailScore from "../src/screens/scores/detailScoreScreen";
import TransferSceen from "../src/screens/transfer";
import ScoreScreen from "../src/screens/scores";
import SignInScreen from "../src/screens/account/SignInScreen";
import SignUpScreen from "../src/screens/account/SignUpScreen";
import UCLSceen from "../src/screens/UCL";
import NewsScreen from "../src/screens/news/NewsSceen";
import { Image, StyleSheet } from "react-native";
import DetailTransfer from "../src/screens/transfer/detailTransfer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TransferScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Transfer" component={TransferSceen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailTransfer}
      />
    </Stack.Navigator>
  );
};

const ScoreScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DetailScore" component={DetailScore} />
      <Stack.Screen name="League" component={ScoreScreen} />
    </Stack.Navigator>
  );
};

const NewsScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsScreen" component={NewsScreen}/>
      <Stack.Screen name="DetailNews" component={ DetailNewsSceen } />
    </Stack.Navigator>
  )
}

const LoginScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="News"
        component={NewsScreenNavigator}
        options={{
          tabBarLabel: "News",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        options={{
          tabBarLabel: "Transfer",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="swap-horizontal-circle"
              size={size}
              color={color}
            />
          ),
        }}
        component={TransferScreenNavigator}
      />
      <Tab.Screen
        name="UCL"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/icons/UCL.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        component={UCLSceen}
      />
      <Tab.Screen
        name="Score"
        component={ScoreScreenNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Score",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LoginScreenNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
