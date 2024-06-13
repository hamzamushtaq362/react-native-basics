import { View, StyleSheet, Text, SectionList } from "react-native";

export default function App() {
  const data = [
    {
      type: "fire",
      data: ["dragon", "dragon-2", "dragon-3"],
    },
    {
      type: "water",
      data: ["kraken", "kraken-2", "kraken-3"],
    },
  ];
  return (
    <View style={styles.subContainer}>
      <SectionList
        sections={data}
        renderItem={({ item }, index) => {
          return (
            <View kety={index}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          <Text style={{ fontSize: 16 }}>{section.type}</Text>;
        }}
      />
    </View>
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
  headerText: {},
  footerText: {},
});
