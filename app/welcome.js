import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../utils/globalStyles";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/hello.png")}
      style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}
      resizeMode="cover"
    >
      <Text style={globalStyles.welcomeTitle}>Witaj w aplikacji Moje Przepisy</Text>

      <Pressable style={globalStyles.button} onPress={() => router.push("/(tabs)")}>
        <Text style={globalStyles.buttonText}>Przejdź do strony głównej</Text>
      </Pressable>
    </ImageBackground>
  );
}
