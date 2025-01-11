import React, { useState } from "react";
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
import BackButton from "../../../components/BackButton";
import useRecipesStore from "../../../contexts/useRecipesStore";
import { Ionicons } from "@expo/vector-icons";

export default function RecipeDetailsScreen() {
  const { id } = useLocalSearchParams(); // Pobiera ID przepisu z parametrów URL
  const recipes = useRecipesStore((state) => state.recipes);
  const router = useRouter(); // Obsługuje nawigację

  const recipe = recipes.find((r) => r.id === id);

  // Stan dla ikony serca
  const [isLiked, setIsLiked] = useState(recipe?.isLiked || false);

  // Funkcja obsługująca zmianę stanu serca
  const toggleLike = () => {
    useRecipesStore.getState().toggleLike(id);
    setIsLiked((prev) => !prev);
  };

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
        <View style={[globalStyles.container, { paddingTop: 80 }]}>
          {/* Górny rząd z przyciskiem powrotu i serduszkiem */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              position: "absolute",
              top: 40,
              left: 0,
              paddingHorizontal: 0,
              zIndex: 10,
            }}
          >
            <BackButton style={{ position: "relative", top: 0 }} />
            <Pressable
              onPress={toggleLike}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                size={24}
                color="white"
              />
            </Pressable>
          </View>

          {/* Zdjęcie potrawy */}
          <Image
            source={recipe.image}
            style={[
              globalStyles.recipeImage,
              {
                width: "90%",
                height: 200,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#fff",
                marginBottom: 20,
                marginTop: 80,
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

          {/* Przyciski na dole */}
          <Pressable
            style={[
              globalStyles.button,
              {
                alignSelf: "center",
                marginTop: 30,
                paddingHorizontal: 50,
              },
            ]}
            onPress={() => router.push(`/edit-recipe/${recipe.id}`)}
          >
            <Text style={globalStyles.buttonText}>Edytuj</Text>
          </Pressable>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
}
