import { Text, View, StyleSheet } from "react-native";

export default function BoxModel({}) {
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
    width: "25%",
    height: "25%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
  title: {},
});
