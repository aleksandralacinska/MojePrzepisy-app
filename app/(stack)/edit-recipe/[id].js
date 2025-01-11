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
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
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
  const [image, setImage] = useState(null); // Stan dla zdjęcia

  useEffect(() => {
    // Wypełnianie danych przepisu
    if (recipeToEdit) {
      setName(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients);
      setDescription(recipeToEdit.description);
      setImage(recipeToEdit.image); // Ustawienie istniejącego zdjęcia
    }
  }, [recipeToEdit]);

  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Ustawienie wybranego zdjęcia
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
              image: image || recipeToEdit.image, // Zachowanie starego zdjęcia, jeśli nie zmieniono
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

                {/* Przycisk edycji zdjęcia */}
                <Pressable style={globalStyles.button} onPress={pickImage}>
                  <Text style={globalStyles.buttonText}>Zmień zdjęcie</Text>
                </Pressable>

                {/* Wyświetlanie zdjęcia */}
                {image && (
                  <Image
                    source={typeof image === "string" ? { uri: image } : image}
                    style={{
                      width: "90%",
                      height: 250,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: "#fff",
                      marginVertical: 10,
                    }}
                  />
                )}

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
