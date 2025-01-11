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
          paddingVertical: 20, // Dodaje odstęp na górze i dole listy
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <Pressable
            style={[
              globalStyles.recipeItem,
              { marginBottom: 10 }, // Odstęp między kafelkami
            ]}
            onPress={() => router.push(`/recipe/${item.id}`)}
          >
            {/* Zdjęcie przepisu */}
            <Image source={item.image} style={globalStyles.recipeImage} />

            {/* Nazwa przepisu */}
            <View style={globalStyles.recipeInfo}>
              <Text style={globalStyles.recipeTitleList}>
                {item.title || "Brak tytułu"}
              </Text>
            </View>
          </Pressable>
        )}
        keyboardShouldPersistTaps="handled" // Pozwala przewijać mimo aktywnej klawiatury
        scrollEnabled={true} // Włącza przewijanie
        showsVerticalScrollIndicator={true} // Włącza wskaźnik przewijania
        initialScrollIndex={0} // Ustawia, aby widok zaczynał się od pierwszego elementu
      />
    </BackgroundWrapper>
  );
}
