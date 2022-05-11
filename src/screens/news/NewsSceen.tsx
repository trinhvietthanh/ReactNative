import { View, Text } from "react-native";
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
  FlatList,
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import BlockCard from "../../components/BlockCard";

const newsData = [
  {
    id: 1,
    title:
      "Chuyển nhượng 29/04: Ten Hag được M.U 'thưởng', xác định HĐ chất lượng; Abramovich đòi quyền lợi bán Chelsea",
    desciption: "Desc",
    image:
      "https://media.bongda.com.vn/resize/240x145/files/news/2022/04/29/dsd-122838.jpg",
  },
  {
    id: 2,
    title: `3 điều rút ra sau buổi tập gần nhất của Arsenal: Nụ cười của "chiến thần"`,
    desciption:
      "Arsenal đang có những sự chuẩn bị rất nghiêm túc cho trận đấu derby cuối tuần này gặp West Ham.",
    image:
      "https://media.bongda.com.vn/resize/240x145/files/phi.do/2022/04/29/1-1912.jpeg",
  },
  {
    id: 3,
    title: `Arsenal dựng "bức tường Saka" ở Emirates`,
    desciption:
      "Arsenal đã có một hành động hết sức nhân văn để tôn vinh những cống hiến của Bukayo Saka trong thời gian qua.",
    image: "https://media.bongda.com.vn/files/phi.do/2022/04/29/121-1735.png",
  },
];

export default function NewsScreen() {
  return (
    <Box>
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

      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <BlockCard
            title={item.title}
            description={item.desciption}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </Box>
  );
}
