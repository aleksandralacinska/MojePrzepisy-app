import { View, Text, Pressable } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Moje Przepisy</Text>
      <Pressable
        className="bg-blue-500 rounded-lg p-4 mt-4"
        onPress={() => router.push("/add-recipe")}
      >
        <Text className="text-white">Dodaj Przepis</Text>
      </Pressable>
    </View>
  );
}
