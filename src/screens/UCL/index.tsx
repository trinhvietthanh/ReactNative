import { View, Text } from "react-native";
import {
  VStack,
  Box,
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
} from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import BlockCard from "../../components/BlockCard";
export default function UCLSceen() {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Mancity",
      timeStamp: "Đ: 12",
      recentText: [0, 1, 1, 1, 0],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "PSG",
      timeStamp: "Đ: 11", 
      recentText: [1, 0, 2, 1, 1],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_48x48.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Leipzig",
      timeStamp: "Đ: 7",
      recentText: [1, 1, 2, 0, 0],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/R7-Lqc_SDxd97uWgoeUQ-g_48x48.png",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Club Bruge",
      timeStamp: "Đ: 4",
      recentText: [0,0,0,0,1],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/5FQBXpID1LAQJb0BOnmTpw_48x48.png",
    },
  ];
  const dataB = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "LiverPool",
      timeStamp: "Đ: 15",
      recentText: [1, 1, 1, 1, 1],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Atlético Madrid",
      timeStamp: "Đ: 7", 
      recentText: [0, 0, 2, 1, 0],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/srAAE0bOnCppUrlbJpFiHQ_48x48.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Porto",
      timeStamp: "Đ: 5",
      recentText: [1, 1, 2, 0, 0],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/QkkllEKwkj60jEVtOEZWAg_48x48.png",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Milan",
      timeStamp: "Đ: 4",
      recentText: [0,1,2,0,0],
      avatarUrl:
        "https://ssl.gstatic.com/onebox/media/sports/logos/VoKsJ6RitaHGhsM62e6AXQ_48x48.png",
    },
  ];
  return (
    <ScrollView>
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          Bảng A
        </Heading>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText.map((value) => {
                      if (value == 1) {
                        return (
                          <AntDesign
                            name="checkcircle"
                            size={15}
                            color="green"
                          />
                        );
                      } 
                      if (value == 0){
                        return <AntDesign name="closecircle" size={15} color="red" />;
                      }
                      return <AntDesign name="minuscircle" size={15} color="gray" />
                    })}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          Bảng B
        </Heading>
        <FlatList
          data={dataB}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText.map((value) => {
                      if (value == 1) {
                        return (
                          <AntDesign
                            name="checkcircle"
                            size={15}
                            color="green"
                          />
                        );
                      } 
                      if (value == 0){
                        return <AntDesign name="closecircle" size={15} color="red" />;
                      }
                      return <AntDesign name="minuscircle" size={15} color="gray" />
                    })}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          Bảng C
        </Heading>
        <FlatList
          data={dataB}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text>
                    {item.fullName}
                  </Text>
                  <Text
                   
                  >
                    {item.recentText.map((value) => {
                      if (value == 1) {
                        return (
                          <AntDesign
                            name="checkcircle"
                            size={15}
                            color="green"
                          />
                        );
                      } 
                      if (value == 0){
                        return <AntDesign name="closecircle" size={15} color="red" />;
                      }
                      return <AntDesign name="minuscircle" size={15} color="gray" />
                    })}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </ScrollView>
  );
}
