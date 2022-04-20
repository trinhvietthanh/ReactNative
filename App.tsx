import React from "react";
import { NativeBaseProvider, Center } from "native-base";
import Main from "./src/screens/main";
import Tabs from "./navigation/tab";
import Header from "./shared/header";
import AppContainer from "./src/components/app-container";
import { Heading } from "native-base";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function App() {
  return (
    <AppContainer>
      <Tabs/> 
    </AppContainer>
  );
}


