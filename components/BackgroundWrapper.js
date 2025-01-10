import React from "react";
import { ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import globalStyles from "../utils/globalStyles";

export default function BackgroundWrapper({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={[globalStyles.background, { paddingBottom: insets.bottom + 60 }]} // Rozciągnięcie tła
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}
