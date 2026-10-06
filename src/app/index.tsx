import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { getMemories, type Memory } from "../memories";

export default function Index() {
  const [memories, setMemories] = useState<Memory[]>([]);

  useFocusEffect(
    useCallback(() => {
      setMemories([...getMemories()]);
    }, []),
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/new-memory")}
      >
        <Text style={styles.buttonText}>Nytt minne</Text>
      </Pressable>

      <FlatList
        data={memories}
        keyExtractor={(memory) => memory.id}
        renderItem={({ item }) => (
          <Text style={styles.memory}>{item.title}</Text>
        )}
        ListEmptyComponent={<Text>Inga minnen än</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  memory: {
    fontSize: 18,
    paddingVertical: 12,
  },
});
