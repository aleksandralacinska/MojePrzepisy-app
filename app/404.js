import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../utils/globalStyles";

export default function NotFound() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>404 - Strona nie została znaleziona</Text>
    </View>
  );
}
