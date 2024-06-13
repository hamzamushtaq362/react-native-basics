import { View, StyleSheet, Text } from "react-native";

export default function App() {
  const data = [
    {
      type: "fire",
      name: "dragon",
    },
    {
      type: "water",
      name: "kraken",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.subContainer}>
        {data.map((item, index) => {
          return (
            <View kety={index}>
              <Text style={styles.text}>{item?.type}</Text>
              <Text style={styles.text}>{item?.name}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
