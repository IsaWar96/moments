import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const memories = [
  { id: "1", title: "Fika i Borås" },
  { id: "2", title: "Promenad i parken" },
];

export default function Index() {
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
