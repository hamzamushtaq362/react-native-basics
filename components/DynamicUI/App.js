import { View, StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.subContainer}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton
            title={"press me"}
            onPress={() => {
              console.log("pressed");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
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
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    backgroundColor: "lightblue",
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "red",
      },
      android: {
        color: "blue",
      },
    }),
    fontSize: 24,
    textAlign: "center",
  },
});
