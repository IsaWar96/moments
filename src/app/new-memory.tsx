import * as Haptics from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { addMemory } from "../memories";

export default function NewMemory() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [place, setPlace] = useState<string | null>(null);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function addPlace() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Ingen åtkomst",
        "Appen behöver tillåtelse för att läsa din plats.",
      );
      return;
    }

    const position = await Location.getCurrentPositionAsync({});
    const [address] = await Location.reverseGeocodeAsync(position.coords);
    setPlace(address?.city ?? address?.region ?? "Okänd plats");
  }

  function save() {
    if (title.trim() === "") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    addMemory(title.trim(), image, place);
    router.back();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Vad hände?"
        value={title}
        onChangeText={setTitle}
      />

      <Pressable style={styles.outlineButton} onPress={pickImage}>
        <Text style={styles.outlineButtonText}>Välj foto</Text>
      </Pressable>

      {image && <Image source={{ uri: image }} style={styles.preview} />}

      <Pressable style={styles.outlineButton} onPress={addPlace}>
        <Text style={styles.outlineButtonText}>Lägg till plats</Text>
      </Pressable>

      {place && <Text style={styles.place}>📍 {place}</Text>}

      <Pressable style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Spara</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 16,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  outlineButtonText: {
    color: "#2563eb",
    fontSize: 18,
  },
  preview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  place: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
