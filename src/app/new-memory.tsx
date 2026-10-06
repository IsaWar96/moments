import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { addMemory } from "../memories";

export default function NewMemory() {
  const [title, setTitle] = useState("");

  function save() {
    if (title.trim() === "") {
      return;
    }
    addMemory(title.trim());
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
