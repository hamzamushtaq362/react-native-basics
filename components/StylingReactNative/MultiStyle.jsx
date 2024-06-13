import { Text, View, StyleSheet } from "react-native";

export default function MultiStyle({}) {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text style={styles.title}>Hello </Text>
      </View>

      <View style={[styles.box, styles.lightGreenBox]}>
        <Text style={styles.title}>Hamza </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    width: 100,
    height: 100,
    padding: 100,
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
  title: {},
});
