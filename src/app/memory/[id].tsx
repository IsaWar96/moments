import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { getMemory } from "../../memories";

export default function MemoryDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const memory = getMemory(id);
  const [copied, setCopied] = useState(false);

  if (!memory) {
    return (
      <View style={styles.container}>
        <Text>Minnet hittades inte</Text>
      </View>
    );
  }

  async function copy() {
    const text = memory?.place
      ? `${memory.title} (${memory.place})`
      : (memory?.title ?? "");
    await Clipboard.setStringAsync(text);
    setCopied(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{memory.title}</Text>
      {memory.place && <Text style={styles.place}>📍 {memory.place}</Text>}
      {memory.image && (
        <Image source={{ uri: memory.image }} style={styles.image} />
      )}

      <Pressable style={styles.button} onPress={copy}>
        <Text style={styles.buttonText}>
          {copied ? "Kopierat!" : "Kopiera"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  place: {
    fontSize: 18,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 300,
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
