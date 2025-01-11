import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import useRecipesStore from "../../contexts/useRecipesStore";
import { useRouter } from "expo-router";

export default function MyRecipesScreen() {
  const recipes = useRecipesStore((state) => state.recipes);
  const router = useRouter();

  if (!recipes.length) {
    return (
      <BackgroundWrapper>
        <View style={globalStyles.container}>
          <Text style={globalStyles.text}>Brak zapisanych przepisów</Text>
        </View>
      </BackgroundWrapper>
    );
  }

  return (
    <BackgroundWrapper>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={globalStyles.container}
        renderItem={({ item }) => (
          <Pressable
            style={globalStyles.recipeItem}
            onPress={() => router.push(`/recipe/${item.id}`)}
          >
            {/* Zdjęcie przepisu */}
            <Image source={item.image} style={globalStyles.recipeImage} />

            {/* Nazwa przepisu */}
            <View style={globalStyles.recipeInfo}>
              <Text style={globalStyles.recipeTitle}>{item.title}</Text>
            </View>
          </Pressable>
        )}
      />
    </BackgroundWrapper>
  );
}
