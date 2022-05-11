import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  LogBox,
} from "react-native";
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
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { images } from "../../../assets/images";
import { getLeaguges } from "../../../api/services";
import { TeamListItems } from "../../../api/data";

export default function ScoreScreen({ navigation }: any) {
  const [teams, setTeams] = useState<TeamListItems>();
  const [country, setCountry] = useState("England");
  useEffect(() => {
    getLeaguges(country)
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  useEffect(() => {
    getLeaguges(country)
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [country]);
  return (
    <Box>
      <VStack>
        <ScrollView>
          <Stack direction="row" mb="2.5" mt="1.5" space={4}>
            <Button onPress={() => setCountry("England")}>
              <Image
                style={styles.countryImage}
                source={require("../../../assets/premier.jpeg")}
              ></Image>
            </Button>
            <Button onPress={() => setCountry("France")}>
              <Image
                style={styles.countryImage}
                source={require("../../../assets/fr.png")}
              ></Image>
            </Button>
            <Button onPress={() => setCountry("Italy")}>
              <Image
                style={styles.countryImage}
                source={require("../../../assets/seriea.jpeg")}
              ></Image>
            </Button>
            <Button onPress={() => setCountry("Germany")}>
              <Image
                style={styles.countryImage}
                source={require("../../../assets/ge.png")}
              ></Image>
            </Button>
          </Stack>
        </ScrollView>
      </VStack>
      <VStack
        my="4"
        space={5}
        w="100%"
        divider={
          <Box px="2">
            <Divider />
          </Box>
        }
      >
      </VStack>
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
            data={teams}
            numColumns={2}
            renderItem={({ item }: any) => {
              let image = item?.team?.logo;
              return (
                <Box style={styles.container}>
                  <TouchableHighlight
                    onPress={() => navigation.navigate("DetailScore", {
                      team: item.team.id,
                      league: country,
                    })}
                  >
                    <Image
                      style={styles.teamLogo}
                      source={{ uri: image }}
                      alt="image"
                    />
                  </TouchableHighlight>
                  <Text>{item?.team?.name}</Text>
                </Box>
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
function rgba(
  arg0: number,
  arg1: number,
  arg2: number,
  arg3: number
): any | import("react-native").ColorValue | undefined {
  throw new Error("Function not implemented.");
}
