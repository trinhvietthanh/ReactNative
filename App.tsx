import React from "react";
import { NativeBaseProvider, Center } from "native-base";
import Main from "./src/screens/main";
import Header from "./shared/header";
import AppContainer from "./src/components/app-container";
import { Heading } from "native-base";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { Button } from "react-native";
import Tabs from "./navigation/tab";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDEXc7jqbqF_2SwQchDqXqfKwIp9628Sdg",
    authDomain: "appfirstsocer.firebaseapp.com",
    projectId: "appfirstsocer",
    storageBucket: "appfirstsocer.appspot.com",
    messagingSenderId: "850103180899",
    appId: "1:850103180899:web:807c522470ba7bc9b02256",
    measurementId: "G-4W767323NJ",
  };

  initializeApp(firebaseConfig);

  const database = async () => {
    const firestore = getFirestore();

    await setDoc(doc(firestore, "users", "user_id"), {
      phone: "03541154",
      address: "dasdasdasd",
      sex: "male",
    });
  };

  return (
    <AppContainer>
      <Tabs />
    </AppContainer>
  );
}