import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  // Podstawowy kontener widoków
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // Styl dla pól tekstowych (np. do wpisywania nazw)
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    backgroundColor: "#f9f9f9",
    fontFamily: "Montserrat_400Regular",
  },
  // Rozszerzony styl dla dużych pól tekstowych (np. opisu)
  inputBig: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    backgroundColor: "#f9f9f9",
    height: 250,
    textAlignVertical: "top",
    fontFamily: "Montserrat_400Regular",
  },
  // Styl przycisku
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  // Styl tekstu w przyciskach
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  // Styl powiększonego tekstu w przyciskach
  buttonTextBig: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
  },
  // Styl dla tytułów
  title: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    fontFamily: "Montserrat_700Bold",
  },
  // Styl dla zwykłego tekstu
  text: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Montserrat_400Regular",
  },
  // Styl dla białego tekstu
  textW: {
    fontSize: 16,
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
  // Styl dla tekstu składników potrawy
  textIngredient: {
    fontSize: 16,
    color: "white",
    backgroundColor: "transparent",
    padding: 8,
    borderRadius: 5,
    marginVertical: 2,
    marginHorizontal: 20,
    fontFamily: "Montserrat_400Regular",
  },
  // Styl dla tytułu na ekranie powitalnym
  welcomeTitle: {
    fontSize: 40,
    color: "white",
    marginTop: 350,
    marginBottom: 150,
    fontFamily: "Montserrat_700Bold",
  },
  // Styl tła
  background: {
    flex: 1,
  },
  // Styl elementu przepisu na liście
  recipeItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ececec",
    borderRadius: 10,
    width: "100%",
  },
  // Styl zdjęcia w przepisie na liście
  recipeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  // Styl sekcji informacji o przepisie
  recipeInfo: {
    flex: 1,
    marginLeft: 10,
  },
  // Styl tytułu przepisu w szczegółach
  recipeTitle: {
    fontSize: 24,
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  // Styl tytułu przepisu na liście
  recipeTitleList: {
    fontSize: 20,
    color: "black",
    fontFamily: "Montserrat_400Regular",
  },
  // Styl opisu w przepisie
  recipeDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    fontFamily: "Montserrat_400Regular",
  },
  // Styl tytułu sekcji w szczegółach przepisu
  sectionTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: "white",
    textAlign: "left",
    fontFamily: "Montserrat_700Bold",
  },
});

export default globalStyles;
