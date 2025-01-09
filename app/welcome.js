import React from "react";
import { View, Text, ImageBackground, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/hello.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Witaj w aplikacji Moje Przepisy</Text>

        <Pressable style={styles.button} onPress={() => router.push("/index")}>
          <Text style={styles.buttonText}>Przejdź do strony głównej</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
