import React, { useState } from "react";
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
import { useRouter } from "expo-router";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import BackButton from "../../components/BackButton";
import useRecipesStore from "../../contexts/useRecipesStore";

export default function AddRecipeScreen() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const addRecipe = useRecipesStore((state) => state.addRecipe);

  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const saveRecipe = () => {
    if (!name.trim()) {
      Alert.alert("Błąd", "Nazwa potrawy jest wymagana");
      return;
    }

    const newRecipe = {
      id: Date.now().toString(),
      title: name,
      ingredients,
      description,
      image: require("../../assets/images/background.png"), // Tymczasowy obrazek
    };

    addRecipe(newRecipe); // Dodaj przepis do globalnego stanu

    Alert.alert(
      "", // Brak nagłówka
      "Przepis zapisany!", // Wiadomość dla użytkownika
      [
        {
          text: "OK",
          onPress: () => router.back(),
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
                <Text style={globalStyles.title}>Dodaj przepis</Text>

                <TextInput
                  style={globalStyles.input}
                  placeholder="Nazwa potrawy"
                  value={name}
                  onChangeText={setName}
                />

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TextInput
                    style={[globalStyles.input, { flex: 1 }]}
                    placeholder="Nazwa i ilość składnika"
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
                          setIngredients((prev) => prev.filter((_, i) => i !== index)),
                      },
                    ]
                  )
                }
                style={{ marginVertical: 1 }}
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

                <Pressable style={globalStyles.button} onPress={saveRecipe}>
                  <Text style={globalStyles.buttonText}>zapisz przepis</Text>
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
