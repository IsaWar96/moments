import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
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

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  function save() {
    if (title.trim() === "") {
      return;
    }
    addMemory(title.trim(), image);
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

      <Pressable style={styles.photoButton} onPress={pickImage}>
        <Text style={styles.photoButtonText}>Välj foto</Text>
      </Pressable>

      {image && <Image source={{ uri: image }} style={styles.preview} />}

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
  photoButton: {
    borderWidth: 1,
    borderColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  photoButtonText: {
    color: "#2563eb",
    fontSize: 18,
  },
  preview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
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
