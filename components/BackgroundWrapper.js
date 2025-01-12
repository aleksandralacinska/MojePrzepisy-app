import React from "react";
import { ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import globalStyles from "../utils/globalStyles";

// Komponent dla tła aplikacji
export default function BackgroundWrapper({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")} // Tło obrazu
      style={[globalStyles.background, { paddingBottom: insets.bottom }]} 
      resizeMode="cover"
    >
      {children} 
      {/* dotyczy wszystkich elementów, które zostaną osadzone wewnątrz komponentu */}
    </ImageBackground>
  );
}
