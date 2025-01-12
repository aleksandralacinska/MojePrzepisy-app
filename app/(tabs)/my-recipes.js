import React from "react";
import { View, Text, FlatList, Image, Pressable, Alert } from "react-native";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import useRecipesStore from "../../contexts/useRecipesStore";
import { useRouter } from "expo-router";

export default function MyRecipesScreen() {
  const recipes = useRecipesStore((state) => state.recipes);
  const removeRecipe = useRecipesStore((state) => state.removeRecipe);
  const router = useRouter();

  // Funkcja do obsługi usuwania przepisu
  const handleDeleteRecipe = (id, title) => {
    Alert.alert(
      "Usuń przepis",
      `Czy na pewno chcesz usunąć przepis "${title}"?`,
      [
        { text: "Anuluj", style: "cancel" },
        {
          text: "Usuń",
          style: "destructive",
          onPress: () => removeRecipe(id),
        },
      ]
    );
  };

  if (!recipes.length) {
    return (
      <BackgroundWrapper>
        <View style={[globalStyles.container, { justifyContent: "center" }]}>
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
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <Pressable
            style={[
              globalStyles.recipeItem,
              { marginBottom: 10 },
            ]}
            onPress={() => router.push(`/recipe/${item.id}`)}
            onLongPress={() => handleDeleteRecipe(item.id, item.title)} // Usuwanie przepisu
          >
            {/* Zdjęcie przepisu */}
            <Image
              source={typeof item.image === "string" ? { uri: item.image } : item.image}
              style={globalStyles.recipeImage}
            />

            {/* Nazwa przepisu */}
            <View style={globalStyles.recipeInfo}>
              <Text style={globalStyles.recipeTitleList}>
                {item.title || "Brak tytułu"}
              </Text>
            </View>
          </Pressable>
        )}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        initialScrollIndex={0}
      />
    </BackgroundWrapper>
  );
}
