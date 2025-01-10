import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";

export default function MyRecipesScreen() {
  return (
    <BackgroundWrapper>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Tu znajdziesz swoje przepisy</Text>
      </View>
    </BackgroundWrapper>
  );
}
