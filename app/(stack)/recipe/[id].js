import { useSearchParams } from "expo-router";

export default function RecipeDetails() {
  const { id } = useSearchParams();

  return (
    <View>
      <Text>Szczegóły przepisu o ID: {id}</Text>
    </View>
  );
}
