import { View, StyleSheet, Text, Pressable } from "react-native";

export default function CustomButton({ onPress, title }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
}
