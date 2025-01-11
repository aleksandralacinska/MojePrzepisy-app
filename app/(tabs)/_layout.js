import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function TabsLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    // Wskaźnik ładowania fontów
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "400",
          fontFamily: "Montserrat_400Regular",
        },
        tabBarIconStyle: { margin: 5 },
        headerTitleStyle: {
          fontFamily: "Montserrat_700Bold",
          fontSize: 18,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Strona główna",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-recipes"
        options={{
          title: "Moje przepisy",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: "Ulubione",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={25} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
