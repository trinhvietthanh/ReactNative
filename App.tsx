import React from "react";
import Main from "./screens/main";
import Tabs from "./navigation/tab";
import Header from "./shared/header";
import AppContainer from "./components/app-container";
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


