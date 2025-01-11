import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function StackLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    // Wskaźnik ładowania fontów
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "Montserrat_700Bold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="add-recipe"
        options={{ title: "Dodaj przepis" }}
      />
      <Stack.Screen
        name="recipe/[id]"
        options={{ title: "Szczegóły przepisu" }}
      />
      <Stack.Screen
        name="edit-recipe/[id]"
        options={{ title: "Edytuj przepis" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
