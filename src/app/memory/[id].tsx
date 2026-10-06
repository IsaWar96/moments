import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { getMemory } from "../../memories";

export default function MemoryDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const memory = getMemory(id);

  if (!memory) {
    return (
      <View style={styles.container}>
        <Text>Minnet hittades inte</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{memory.title}</Text>
      {memory.image && (
        <Image source={{ uri: memory.image }} style={styles.image} />
      )}
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
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
});
