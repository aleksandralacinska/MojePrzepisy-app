import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function AddRecipeScreen() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const saveRecipe = () => {
    console.log({ name, ingredients, description });
    alert("Przepis zapisany!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodaj przepis</Text>

      {/* Nazwa potrawy */}
      <TextInput
        style={styles.input}
        placeholder="Nazwa potrawy"
        value={name}
        onChangeText={setName}
      />

      {/* Składniki */}
      <View style={styles.ingredientContainer}>
        <TextInput
          style={styles.input}
          placeholder="Dodaj składnik"
          value={ingredient}
          onChangeText={setIngredient}
        />
        <Pressable style={styles.addButton} onPress={addIngredient}>
          <Text style={styles.addButtonText}>Dodaj</Text>
        </Pressable>
      </View>
      
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.ingredientItem}>• {item}</Text>
        )}
      />

      {/* Opis czynności */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Opis czynności"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      {/* Przycisk Zapisz */}
      <Button title="Zapisz" onPress={saveRecipe} />
    </View>
  );
}

export const unstable_settings = {
  headerShown: true,
};

export const options = {
  headerLeft: ({ tintColor }) => (
    <Pressable onPress={() => router.back()} style={styles.headerButton}>
      <Text style={[styles.headerButtonText, { color: tintColor }]}>Wróć</Text>
    </Pressable>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  ingredientItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  headerButton: {
    marginLeft: 10,
    padding: 10,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
