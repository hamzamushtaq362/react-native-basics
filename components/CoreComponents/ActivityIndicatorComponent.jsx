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
} from "react-native";

export default function ActivityIndicatorComponent({}) {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        animating={false}
      />
    </View>
  );
}
