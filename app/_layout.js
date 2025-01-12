import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    // Wyświetlenie wskaźnika ładowania, gdy fonty nie są jeszcze załadowane
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false, // Ukrycie nagłówka nawigacji
      }}
    />
  );
}

// Style dla wskaźnika ładowania
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
