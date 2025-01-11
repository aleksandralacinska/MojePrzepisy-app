import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import globalStyles from "../../../utils/globalStyles";
import BackgroundWrapper from "../../../components/BackgroundWrapper";
import BackButton from "../../../components/BackButton";
import useRecipesStore from "../../../contexts/useRecipesStore";

export default function EditRecipeScreen() {
  const { id } = useLocalSearchParams(); // Pobranie ID przepisu
  const recipes = useRecipesStore((state) => state.recipes);
  const updateRecipe = useRecipesStore((state) => state.updateRecipe);
  const router = useRouter();

  const recipeToEdit = recipes.find((recipe) => recipe.id === id);

  // Stany lokalne na dane przepisu
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Wypełnianie danych przepisu
    if (recipeToEdit) {
      setName(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients);
      setDescription(recipeToEdit.description);
    }
  }, [recipeToEdit]);

  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const saveEditedRecipe = () => {
    Alert.alert(
      "Potwierdzenie",
      "Czy na pewno chcesz zapisać zmiany?",
      [
        { text: "Nie", style: "cancel" },
        {
          text: "Tak",
          onPress: () => {
            // Aktualizacja przepisu w stanie globalnym
            updateRecipe(id, {
              title: name,
              ingredients,
              description,
            });
            router.back(); // Powrót do szczegółów przepisu
          },
        },
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundWrapper>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <FlatList
            data={ingredients}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={
              <View style={[globalStyles.container, { paddingTop: 80 }]}>
                <BackButton />
                <Text style={globalStyles.title}>Edytuj przepis</Text>

                <TextInput
                  style={globalStyles.input}
                  placeholder="Nazwa potrawy"
                  value={name}
                  onChangeText={setName}
                />

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={[globalStyles.input, { flex: 1 }]}
                    placeholder="Dodaj składnik"
                    value={ingredient}
                    onChangeText={setIngredient}
                  />
                  <Pressable style={globalStyles.button} onPress={addIngredient}>
                    <Text style={globalStyles.buttonText}>+ dodaj</Text>
                  </Pressable>
                </View>
              </View>
            }
            renderItem={({ item, index }) => (
              <Pressable
                onLongPress={() =>
                  Alert.alert(
                    "Usuń składnik",
                    `Czy na pewno chcesz usunąć składnik "${item}"?`,
                    [
                      { text: "Anuluj", style: "cancel" },
                      {
                        text: "Usuń",
                        style: "destructive",
                        onPress: () =>
                          setIngredients((prev) =>
                            prev.filter((_, i) => i !== index)
                          ),
                      },
                    ]
                  )
                }
                style={{ marginVertical: 5 }}
              >
                <Text style={globalStyles.textIngredient}>• {item}</Text>
              </Pressable>
            )}
            ListFooterComponent={
              <View style={globalStyles.container}>
                <TextInput
                  style={globalStyles.inputBig}
                  placeholder="Opis czynności"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={4}
                />

                <Pressable
                  style={[globalStyles.button, { marginTop: 20 }]}
                  onPress={saveEditedRecipe}
                >
                  <Text style={globalStyles.buttonText}>Zapisz zmiany</Text>
                </Pressable>
              </View>
            }
            keyboardShouldPersistTaps="handled"
          />
        </KeyboardAvoidingView>
      </BackgroundWrapper>
    </TouchableWithoutFeedback>
  );
}
