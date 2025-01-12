import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Komponent przycisku powrotu
export default function BackButton({ style }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()} // Funkcja powrotu do poprzedniego widoku
      style={[
        {
          position: "absolute",
          top: 40,
          left: 20,
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 8,
          borderRadius: 50,
        },
        style,
      ]}
    >
      <Ionicons name="arrow-back" size={24} color="white" />
      {/* Ikona strzałki powrotu */}
    </Pressable>
  );
}
