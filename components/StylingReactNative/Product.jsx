import { Text, View, StyleSheet } from "react-native";

export default function Product({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
  },
  title: {},
});
