import {
  Box,
  Text,
  useBreakpointValue,
  Image,
  Stack,
  Center,
  Heading,
  HStack,
  VStack,
  ScrollView,
  FlatList,
} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getScore } from "../../../api/services";
const dataSource = [
  {
    goals: {
      away: 2,
      home: 1,
    },
    teams: {
      away: {
        id: 33,
        logo: "https://media.api-sports.io/football/teams/33.png",
        name: "MU",
        winner: true,
      },
      home: {
        id: 48,
        logo: "https://media.api-sports.io/football/teams/48.png",
        name: "WestHam",
        winner: false,
      },
    },
  },
  {
    goals: {
      away: 2,
      home: 1,
    },
    teams: {
      away: {
        id: 33,
        logo: "https://media.api-sports.io/football/teams/33.png",
        name: "MU",
        winner: true,
      },
      home: {
        id: 48,
        logo: "https://media.api-sports.io/football/teams/48.png",
        name: "WestHam",
        winner: false,
      },
    },
  },
  {
    goals: {
      away: 2,
      home: 1,
    },
    teams: {
      away: {
        id: 33,
        logo: "https://media.api-sports.io/football/teams/33.png",
        name: "MU",
        winner: true,
      },
      home: {
        id: 48,
        logo: "https://media.api-sports.io/football/teams/48.png",
        name: "WestHam",
        winner: false,
      },
    },
  },
  {
    goals: {
      away: 2,
      home: 1,
    },
    teams: {
      away: {
        id: 33,
        logo: "https://media.api-sports.io/football/teams/33.png",
        name: "MU",
        winner: true,
      },
      home: {
        id: 48,
        logo: "https://media.api-sports.io/football/teams/48.png",
        name: "WestHam",
        winner: false,
      },
    },
  },
  {
    goals: {
      away: 2,
      home: 1,
    },
    teams: {
      away: {
        id: 33,
        logo: "https://media.api-sports.io/football/teams/33.png",
        name: "MU",
        winner: true,
      },
      home: {
        id: 48,
        logo: "https://media.api-sports.io/football/teams/48.png",
        name: "WestHam",
        winner: false,
      },
    },
  },
  {
    goals: {
      away: 2,
      home: 1,
    },
    teams: {
      away: {
        id: 33,
        logo: "https://media.api-sports.io/football/teams/33.png",
        name: "MU",
        winner: true,
      },
      home: {
        id: 48,
        logo: "https://media.api-sports.io/football/teams/48.png",
        name: "WestHam",
        winner: false,
      },
    },
  },
];
export default function DetailScore({ route, navigation }: any) {
  // const { team, league } = route.params;
  const [data, setData] = useState();
  // useEffect(() => {
  //   getScore(team, 39).then(data => {
  //     setData(data);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <ScrollView
      minW={120}
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
        borderRadius: 8,
      }}
    >
      <FlatList
        data={dataSource}
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

                  <Text>
                    {item?.goals.away} - {item?.goals.home}
                  </Text>
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
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
});
