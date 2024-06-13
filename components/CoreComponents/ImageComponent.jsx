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

export default function ImageComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: "cyan", padding: 60 }}>
      <View>
        <Image source={logoImg} style={{ height: 300, width: 300 }}></Image>

        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQIQMNME43gNEWFI88jAmyafg41gpboq26A&s",
          }}
          style={{ height: 300, width: 300 }}
        ></Image>

        <ImageBackground source={logoImg}>
          <Text>Image Text</Text>
        </ImageBackground>
      </View>
    </View>
  );
}
