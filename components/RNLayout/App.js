import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.subContainer}>
      {/* <Box style={{ backgroundColor: "lightgreen", flex: 1 }}>Box1</Box>
      <Box style={{ backgroundColor: "lightpink", flex: 3 }}>Box2</Box>
      <Box style={{ backgroundColor: "lightblue" }}>Box3</Box> */}

      <Box
        style={{
          backgroundColor: "lightgreen",
        //   position: "absolute",
        //   top: 75,
        //   left: 75,
        }}
      >
        Box1
      </Box>
      <Box style={{ backgroundColor: "lightpink" }}>Box2</Box>
      <Box style={{ backgroundColor: "lightblue" }}>Box3</Box>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
  subContainer: {
    flex: 1,
    // flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
  },
});
