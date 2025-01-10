import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../utils/globalStyles";

export default function MyRecipesScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tu znajdziesz swoje przepisy</Text>
    </View>
  );
}
