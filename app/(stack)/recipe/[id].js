import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import globalStyles from "../../../utils/globalStyles";
import BackgroundWrapper from "../../../components/BackgroundWrapper";
import useRecipesStore from "../../../contexts/useRecipesStore";
import { Ionicons } from "@expo/vector-icons";

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams(); // Pobiera ID przepisu z parametrów URL
  const recipes = useRecipesStore((state) => state.recipes);
  const router = useRouter(); // Obsługuje nawigację

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <BackgroundWrapper>
        <View style={globalStyles.container}>
          <Text style={globalStyles.title}>Przepis nie został znaleziony</Text>
        </View>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.container}>
          {/* Przycisk powrotu */}
          <Pressable
            onPress={() => router.back()}
            style={[
              globalStyles.button,
              {
                position: "absolute",
                top: 40,
                left: 20,
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: 8,
                borderRadius: 50,
              },
            ]}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>

          {/* Zdjęcie potrawy */}
          <Image
            source={recipe.image}
            style={[
              globalStyles.recipeImage,
              {
                width: "90%",
                height: "25%",
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#fff",
                marginBottom: 20,
                alignSelf: "center",
                marginTop: 60,
              },
            ]}
          />

          {/* Nazwa potrawy */}
          <Text style={globalStyles.recipeTitle}>{recipe.title}</Text>

          {/* Sekcja składników */}
          <Text
            style={[
              globalStyles.sectionTitle,
              { textAlign: "left", alignSelf: "flex-start" },
            ]}
          >
            Składniki:
          </Text>
          <View style={{ alignSelf: "flex-start", marginBottom: 20 }}>
            {recipe.ingredients.map((ingredient, index) => (
              <Text
                key={index}
                style={[globalStyles.textW, { textAlign: "left" }]}
              >
                • {ingredient}
              </Text>
            ))}
          </View>

          {/* Sekcja opisu */}
          <Text
            style={[
              globalStyles.sectionTitle,
              { textAlign: "left", alignSelf: "flex-start" },
            ]}
          >
            Opis:
          </Text>
          <Text
            style={[
              globalStyles.textW,
              { textAlign: "left", alignSelf: "flex-start" },
            ]}
          >
            {recipe.description}
          </Text>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
}
