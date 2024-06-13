import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  Modal,
} from "react-native";

export default function ModalComponent({}) {
  const [isModal, setIsModal] = useState(false);
  return (
    <View>
      <View>
        <Button
          title="Press"
          color="midnightblue"
          onPress={() => {
            setIsModal(true);
          }}
        />
        <Modal
          visible={isModal}
          onRequestClose={() => setIsModal(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ backgroundColor: "lightblue", padding: 60 }}>
            <Text>Modal Content</Text>
            <Button
              title="Close"
              onPress={() => {
                setIsModal(false);
              }}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
}
