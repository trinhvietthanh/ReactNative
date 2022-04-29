import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import {
  VStack,
  Box,
  Input,
  Divider,
  Icon,
  Stack,
  Center,
  Heading,
  ScrollView,
  Image,
  FlatList,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MatchCard from "../../components/MatchCard";
import React, { useEffect, useState } from "react";
import { images } from "../../../assets/images";
import Stacks from "../../../navigation/stack";

const data = [
  {
    name: 'LiverPool',
    image: 'LIV'
  },
  {
    name: 'Mancheter City',
    image: 'ARS'
  },
  {
    name: 'Chelsea',
    image: 'CHE'
  },
  {
    name: 'Man city',
    image: 'MNC'
  },
  {
    name: 'Man Utd',
    image: 'MAN'
  },
  {
    name: 'Newcastle',
    image: 'NEW'
  },
  {
    name: 'Southampton',
    image: 'SOU'
  },

  {
    name: 'Tottenham',
    image: 'TOT'
  },
  {
    name: 'Leicester',
    image: 'LEI'
  },
  {
    name: 'Watford',
    image: 'WAT'
  },
  {
    name: 'Leicester',
    image: 'WBA'
  },
  {
    name: 'West Ham',
    image: 'WHU'
  },
  
]

export default function ScoreScreen({ navigation }: any) {
  const [teams, setTeam] = useState(data);
  // useEffect(() => {
  //   fetch("https://vast-beach-43552.herokuapp.com/teams")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setTeam(res.json());
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(teams)

  return (
    <Box>
      <ScrollView>
        <VStack>
          <Stack direction="row" mb="2.5" mt="1.5" space={4}>
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
              ENG
            </Center>
            <Center
              bg="primary.500"
              size="16"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              SPAIN
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              // bgImage={'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'}
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              ITALY
            </Center>
            <Center
              size="16"
              bg="primary.700"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              FRANCE
            </Center>
          </Stack>
        </VStack>
      </ScrollView>
      <VStack
        my="4"
        space={5}
        w="100%"
        maxW="300px"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            borderWidth="0"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </VStack>
      </VStack>
      <Center>
        <ScrollView
          maxW="400"
          h="80"
          _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "72",
            borderRadius: 8,
          }}
        >
          <FlatList
            data={teams}
            numColumns={2}
            renderItem={({ item }: any) => {
              // let team = item.abbr;im
              let team = item.image;
              let logo = images[team]["uri"];
              return (
                <Box style={styles.container}>
                  <TouchableHighlight
                    onPress={() =>
                      navigation.navigate("DetailScore", {
                        team: item.abbr,
                        teamName: item.name,
                      })
                    }
                  >
                    {/* <TouchableHighlight onPress={() => Stacks.navigate('Result')}> */}
                    <Image style={styles.teamLogo} source={logo} alt="image" />
                  </TouchableHighlight>
                  <Text>{item.name}</Text>
                </Box>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </Center>
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
    shadowOffset: {width: 0, height: 0},  
    // shadowColor: rgba(0, 0, 0, 0.8),

  },
  teamLogo: {
    width: 35,
    height: 35,
  },
  contentContainer: {
    padding: 5,
  },
  bottomContainer: {
    alignItems: "center",
  },
});
function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}

