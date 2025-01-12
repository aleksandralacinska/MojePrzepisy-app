import React, { useMemo } from "react";
import { View, FlatList, Image, Text, Pressable } from "react-native";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import useRecipesStore from "../../contexts/useRecipesStore";
import { useRouter } from "expo-router";

export default function LikedScreen() {
  const recipes = useRecipesStore((state) => state.recipes);
  const router = useRouter();

  // Filtrowanie ulubionych przepisów
  const likedRecipes = useMemo(() => recipes.filter((recipe) => recipe.isLiked), [recipes]);

  if (!likedRecipes.length) {
    return (
      <BackgroundWrapper>
        <View style={[globalStyles.container, { justifyContent: "center" }]}>
          <Text style={globalStyles.title}>Brak polubionych przepisów</Text>
        </View>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <FlatList
        data={likedRecipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <Pressable
            style={globalStyles.recipeItem}
            onPress={() => router.push(`/recipe/${item.id}`)} // Nawigacja do widoku szczegółów
          >
            <Image
              source={typeof item.image === "string" ? { uri: item.image } : item.image}
              style={globalStyles.recipeImage}
            />
            <View style={globalStyles.recipeInfo}>
              <Text style={globalStyles.recipeTitleList}>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </BackgroundWrapper>
  );
}
