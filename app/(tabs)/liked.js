import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../utils/globalStyles";
import BackgroundWrapper from "../../components/BackgroundWrapper";

export default function LikedScreen() {
  return (
    <BackgroundWrapper>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Tu znajdziesz polubione przepisy</Text>
      </View>
    </BackgroundWrapper>
  );
}
