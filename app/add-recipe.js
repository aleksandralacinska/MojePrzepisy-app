import { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function AddRecipe() {
  const [title, setTitle] = useState("");

  const handleSave = () => {
    // Zapisz przepis
  };

  return (
    <View className="p-4">
      <TextInput
        className="border p-2 rounded"
        placeholder="Tytuł przepisu"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Zapisz Przepis" onPress={handleSave} />
    </View>
  );
}
