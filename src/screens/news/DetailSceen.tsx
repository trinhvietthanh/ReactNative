import { Box, Text, Image } from "native-base";
import { StyleSheet } from "react-native";
export default function DetailNewsScreen() {
  return (
    <Box style={styles.newsContainer}>
      <Image
        width={550}
        height={250}
        resizeMode={"cover"}
        source={{
          uri: "https://media.bongda.com.vn/files/trong.le/2022/04/29/screenshot-2022-04-29-144217-1442.jpg",
        }}
        alt="Alternate Text"
      />
      <Text style={styles.title}>This is title</Text>
      <Text style={styles.date}>12/10/2021</Text>
      <Text style={styles.newsDescription}>Something</Text>
    </Box>
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
