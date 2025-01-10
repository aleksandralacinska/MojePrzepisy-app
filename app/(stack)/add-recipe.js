import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";

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

  const removeIngredient = (index) => {
    Alert.alert(
      "Usuń składnik",
      "Czy na pewno chcesz usunąć ten składnik?",
      [
        { text: "Anuluj", style: "cancel" },
        {
          text: "Usuń",
          style: "destructive",
          onPress: () => {
            const updatedIngredients = ingredients.filter((_, i) => i !== index);
            setIngredients(updatedIngredients);
          },
        },
      ]
    );
  };

  const saveRecipe = () => {
    console.log({ name, ingredients, description });
    alert("Przepis zapisany!");
    router.back();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <BackgroundWrapper>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={globalStyles.container}>
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

              <FlatList
                data={ingredients}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Pressable
                    onLongPress={() => removeIngredient(index)}
                    style={{ marginVertical: 5 }}
                  >
                    <Text style={globalStyles.textIngredient}>• {item}</Text>
                  </Pressable>
                )}
              />

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
          </ScrollView>
        </KeyboardAvoidingView>
      </BackgroundWrapper>
    </TouchableWithoutFeedback>
  );
}
