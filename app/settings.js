import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../utils/globalStyles";

export default function SettingsScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Ustawienia</Text>
    </View>
  );
}
