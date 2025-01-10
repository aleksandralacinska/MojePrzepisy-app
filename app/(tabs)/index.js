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
        <Text style={globalStyles.title}>Co dzisiaj gotujemy?</Text>
        <Pressable style={globalStyles.button} onPress={() => router.push("/(stack)/add-recipe")}>
          <Text style={globalStyles.buttonText}>Dodaj przepis</Text>
        </Pressable>
      </SafeAreaView>
    </BackgroundWrapper>
  );
}
