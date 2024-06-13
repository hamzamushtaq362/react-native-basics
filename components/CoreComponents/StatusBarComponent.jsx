import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  Modal,
  StatusBar,
} from "react-native";

export default function StatusBarComponent({}) {
  return (
    <View>
      <View>
        <StatusBar
          backgroundColor="lightgreen"
          barStyle="light-content"
          // hidden
        />
      </View>
    </View>
  );
}
