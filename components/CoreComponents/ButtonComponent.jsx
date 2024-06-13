import { Text, View, StyleSheet, Button, Pressable, Image } from "react-native";

export default function ButtonComponent({}) {
  return (
    <View>
      {/* Normal Button */}
      <View>
        <Button
          title="Press"
          color="midnightblue"
          onPress={() => {
            console.log("Pressed");
          }}
          disabled
        />
      </View>
      {/* Pressable Button */}
      <View>
        <Button
          title="Press"
          color="midnightblue"
          onPress={() => {
            console.log("Pressed");
          }}
        />
        <Pressable onPress={() => console.log("image pressed")}>
          <Image source={logoImg} style={{ height: 300, width: 300 }}></Image>
        </Pressable>
        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            You will need an Android device to run your React Native Android
            app. This can be either a physical Android device, or more commonly,
            you can use an Android Virtual Device which allows you to emulate an
            Android device on your computer. Either way, you will need to
            prepare the device to run Android apps for development. You will
            need an Android device to run your React Native Android app. This
            can be either a physical Android device, or more commonly, you can
            use an Android Virtual Device which allows you to emulate an Android
            device on your computer. Either way, you will need to prepare the
            device to run Android apps for development.
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
