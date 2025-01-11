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
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Importujemy bibliotekę
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
  const [image, setImage] = useState(null); // Stan na zdjęcie

  const router = useRouter();
  const addRecipe = useRecipesStore((state) => state.addRecipe);

  // Funkcja dodawania składnika
  const addIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  // Funkcja otwierająca galerię i wybierająca zdjęcie
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3], // Proporcje zdjęcia
      quality: 1, // Jakość od 0 do 1
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Przechowujemy URI wybranego zdjęcia
    }
  };

  // Funkcja zapisywania przepisu
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
      image: image || require("../../assets/images/potrawa.png"), // Ustaw domyślne zdjęcie, jeśli użytkownik nie wybierze
    };

    addRecipe(newRecipe); // Dodaj przepis do globalnego stanu

    Alert.alert(
      "",
      "Przepis zapisany!",
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

                {/* Przycisk dodawania zdjęcia */}
                <Pressable style={globalStyles.button} onPress={pickImage}>
                  <Text style={globalStyles.buttonText}>Wybierz zdjęcie</Text>
                </Pressable>

                {/* Zdjęcie potrawy */}
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{
                      width: 200,
                      height: 150,
                      borderRadius: 10,
                      marginVertical: 10,
                    }}
                  />
                )}

                {/* Pole na nazwę potrawy */}
                <TextInput
                  style={globalStyles.input}
                  placeholder="Nazwa potrawy"
                  value={name}
                  onChangeText={setName}
                />

                {/* Pole do dodawania składników */}
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

                {/* Przycisk zapisywania przepisu */}
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
