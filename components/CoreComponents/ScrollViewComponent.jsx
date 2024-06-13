import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const logoImg = require("../assets/images/adaptive-icon.png");

export default function ScrollViewComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "cyan", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ height: 300, width: 300 }}></Image>
        <Text>
          You will need an Android device to run your React Native Android app.
          This can be either a physical Android device, or more commonly, you
          can use an Android Virtual Device which allows you to emulate an
          Android device on your computer. Either way, you will need to prepare
          the device to run Android apps for development. You will need an
          Android device to run your React Native Android app. This can be
          either a physical Android device, or more commonly, you can use an
          Android Virtual Device which allows you to emulate an Android device
          on your computer. Either way, you will need to prepare the device to
          run Android apps for development.
        </Text>
        <Image source={logoImg} style={{ height: 300, width: 300 }}></Image>
      </ScrollView>
    </View>
  );
}
