import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

export default function AlertComponent({}) {
  return (
    <View>
      <Button title={"Press"} onPress={() => Alert.alert("Invalid")} />
      <Button
        title={"Alert 2"}
        onPress={() => Alert.alert("Invalid", "Incorrect")}
      />
      <Button
        title={"Alert 3"}
        onPress={() =>
          Alert.alert("Invalid", "Incorrect", [
            {
              text: "Cancel",
              onPress: () => {
                console.log("Pressed Cancel");
              },
            },
            {
              text: "Submit",
              onPress: () => {
                console.log("Pressed Submitted");
              },
            },
          ])
        }
      />
    </View>
  );
}
