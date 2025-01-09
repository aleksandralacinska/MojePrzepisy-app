import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center", // Wyrównaj tytuł na środku
        headerStyle: {
          backgroundColor: "#f8f8f8", // Kolor tła nagłówka
        },
        headerTintColor: "#333", // Kolor tekstu w nagłówku
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Strona główna",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-recipes"
        options={{
          title: "Moje przepisy",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: "Ulubione",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
