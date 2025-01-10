import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../utils/globalStyles";

export default function LikedScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Tu znajdziesz polubione przepisy</Text>
    </View>
  );
}
