import { FlatList, StyleSheet, Text, View } from "react-native";

const minnen = [
  { id: "1", titel: "Fika i Borås" },
  { id: "2", titel: "Promenad i parken" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={minnen}
        keyExtractor={(minne) => minne.id}
        renderItem={({ item }) => (
          <Text style={styles.minne}>{item.titel}</Text>
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
  minne: {
    fontSize: 18,
    paddingVertical: 12,
  },
});
