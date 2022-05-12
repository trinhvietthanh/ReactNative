import { View, StyleSheet } from "react-native";
import {
  VStack,
  Box,
  Text,
  Input,
  Divider,
  Icon,
  Stack,
  FlatList,
  Avatar,
  Spacer,
  Heading,
  ScrollView,
  HStack,
  Image,
  Button,
  Center,
} from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import BlockCard from "../../components/BlockCard";
import {  getMatchOfRound } from "../../../api/services";
export default function UCLSceen() {
  const [round, setRound] = useState("Group Stage - 1");
  const [match, setMatch] = useState();
  useEffect(() => {
    getMatchOfRound(round)
      .then((data) => {
        setMatch(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    getMatchOfRound(round)
      .then((data) => {
        setMatch(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [round]);
  return (
    <Box>
      <ScrollView horizontal={true}>
      <Button margin={2} onPress={()=> setRound('Group Stage - 1')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Round 1
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Group Stage - 2')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Round 2
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Group Stage - 3')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Round 3
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Group Stage - 4')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Round 4
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Group Stage - 5')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Round 5
                          </Center>
            </Button>

         
            <Button margin={2} onPress={()=> setRound('Group Stage - 6')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Round 6
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Round of 16')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
                            Vòng 1-16
            </Center>
            </Button>
            
            <Button margin={2} onPress={()=> setRound('Quarter-finals')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
                            Tứ kết
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Semi-finals')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
                            Bán kết
            </Center>
            </Button>
            <Button margin={2} onPress={()=> setRound('Final')}>
              <Center
              size="16"
              bg="primary.400"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              Final
            </Center>
              </Button>
           
      </ScrollView>

      <ScrollView
      minW={120}
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
        borderRadius: 8,
      }}
    >
      <Text>{round}</Text>
      <FlatList
        data={match}
        renderItem={({ item }: any) => {
          return (
            <HStack space={3} alignItems="center" justifyContent="center">
              <View
                style={{
                  display: "flex",
                }}
              >
                <HStack
                  m="3"
                  w="300"
                  borderRadius="xl"
                  p="3"
                  bg="cyan.200"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack alignItems="center" justifyContent="center">
                    <Image
                      width={50}
                      height={50}
                      marginRight={10}
                      resizeMode={"cover"}
                      source={{
                        uri: item.teams.away.logo,
                      }}
                      alt="Alternate Text"
                    />
                    <Text marginRight={10}>MU</Text>
                  </VStack>

                 {item?.goals.away ?  <Text>
                    {item?.goals.away} - {item?.goals.home}
                  </Text> : <Text>28/05/2022</Text>}
                
                  <VStack alignItems="center" justifyContent="center">
                    <Image
                      width={50}
                      height={50}
                      marginLeft={10}
                      resizeMode={"cover"}
                      source={{
                        uri: item.teams.home.logo,
                      }}
                      alt="Alternate Text"
                    />
                    <Text marginLeft={10}>MU</Text>
                  </VStack>
                </HStack>
              </View>
            </HStack>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 8,
    alignItems: "center",
    shadowOpacity: 0.75,
    justifyContent: "center",
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0 },
    // shadowColor: rgba(0, 0, 0, 0.8),
  },
  teamLogo: {
    width: 35,
    height: 35,
  },
  countryImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  contentContainer: {
    padding: 5,
  },
  bottomContainer: {
    alignItems: "center",
  },
});
