import { Box, Text, Image } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
export default function DetailTransfer(props: any) {
  const [news, setNews] = useState();
  useEffect(() => {

  }, [])
  return (
    <Box style={styles.newsContainer}>
      <Image
        width={550}
        height={250}
        resizeMode={"cover"}
        source={{
          uri: props.image,
        }}
        alt="Alternate Text"
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.newsDescription}>{props.description}</Text>
      <Text style={styles.newsDescription}>{props.content}</Text>
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
