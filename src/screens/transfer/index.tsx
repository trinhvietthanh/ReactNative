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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import BlockCard from "../../components/BlockCard";

const dataSource = [
  {
    id: '123123',
    title:
      "Chi tiết hợp đồng của Rudiger với Real Madrid: Lương, lót tay, hoa hồng",
    desciption:
      "Real Madrid được xác nhận đã giành được chữ ký của trung vệ Antonio Rudiger từ Chelsea theo dạng chuyển nhượng tự do.",
    image:
      "https://media.bongda.com.vn/files/trong.le/2022/04/29/screenshot-2022-04-29-144217-1442.jpg",
  },
  {
    id: '123123',
    title: "Dọn đường đón Pogba, Real Madrid lên kế hoạch bán công thần",
    desciption:
      "Đội bóng Hoàng gia Tây Ban Nha sẵn sàng bán một trụ cột để dọn đường đón Paul Pogba vào Hè tới.",
    image:
      "https://media.bongda.com.vn/files/duong.nguyen/2022/04/29/1-1051.jpg",
  },
  {
    id: '12312',
    title: "Vì sao Chelsea và Man Utd theo sát Declan Rice?",
    desciption:
      " Ngôi sao West Ham đã trở thành mục tiêu thu hút sự chú ý của những đội bóng hàng đầu giải Ngoại hạng Anh.",
    image:
      "https://media.bongda.com.vn/files/hai.phan/2022/04/15/c9b3239d-e08a-4194-ad79-be87afb6fdc9-0851.jpg",
  },
];

export default function TransferSceen({ navigation }: any) {
  return (
    <Box>
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

      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <BlockCard
            title={item.title}
            description={item.desciption}
            image={item.image}
            idItem={item.id}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </Box>
  );
}
