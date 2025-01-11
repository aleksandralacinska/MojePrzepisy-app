import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <BackgroundWrapper>
      <SafeAreaView style={globalStyles.container}>
        {/* Tekst powitalny */}
        <Text style={[globalStyles.title, { marginBottom: 20, textAlign: "center" }]}>
          Cieszymy się, że tutaj jesteś! Nasza aplikacja pozwala Ci wygodnie zarządzać swoimi przepisami kulinarnymi.
        </Text>

        {/* Nagłówek */}
        <Text style={globalStyles.title}>Co dzisiaj gotujemy?</Text>

        {/* Przycisk */}
        <Pressable style={globalStyles.button} onPress={() => router.push("/(stack)/add-recipe")}>
          <Text style={globalStyles.buttonText}>Dodaj przepis</Text>
        </Pressable>
      </SafeAreaView>
    </BackgroundWrapper>
  );
}
