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
  StyleSheet,
} from "react-native";
import Greet from "../components/Greet";
import Product from "../components/StylingReactNative/Product";
import MultiStyle from "../components/StylingReactNative/MultiStyle";
import BoxModel from "../components/StylingReactNative/BoxModel";
import ShadowElevation from "../components/StylingReactNative/ShadowElevation";
import StyleInheritance from "../components/StylingReactNative/StyleInheritance";
// import App from "../components/RNLayout/App";
// import App from "../components/DynamicUI/App";
// import App from "../components/RNList/App";
import App from "../components/RNForms/App";
import { styles } from "../components/DynamicUI/App";
const logoImg = require("../assets/images/adaptive-icon.png");

export default function Index() {
  return (
    <View
      // style={{ flex: 1, backgroundColor: "cyan", padding: 60 }}
      style={styles.container}
    >
      {/* <View
        style={{ width: 400, height: 400, backgroundColor: "red", padding: 60 }}
      >
        <Text>
          <Text style={{ color: "white" }}>Hello</Text> World
        </Text>
      </View> */}

      {/* <Greet name={"Hamza"} /> */}
      {/* <Greet name={"Ahmed"} /> */}

      {/* <Product /> */}
      {/* <MultiStyle /> */}
      {/* <BoxModel /> */}
      {/* <ShadowElevation /> */}
      {/* <StyleInheritance /> */}

      <App />
    </View>
  );
}
