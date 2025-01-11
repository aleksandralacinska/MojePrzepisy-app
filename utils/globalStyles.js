import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
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
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonTextBig: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  title: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    fontFamily: "Montserrat_700Bold",
  },
  text: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Montserrat_400Regular",
  },
  textW: {
    fontSize: 16,
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
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
  welcomeTitle: {
    fontSize: 40,
    color: "white",
    marginTop: 350,
    marginBottom: 150,
    fontFamily: "Montserrat_700Bold",
  },
  background: {
    flex: 1,
  },
  recipeItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ececec",
    borderRadius: 10,
    width: "100%",
  },
  recipeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  recipeInfo: {
    flex: 1,
    marginLeft: 10,
  },
  recipeTitle: {
    fontSize: 24,
    color: "white",
    fontFamily: "Montserrat_700Bold",
  },
  recipeTitleList: {
    fontSize: 20,
    color: "black",
    fontFamily: "Montserrat_400Regular",
  },
  recipeDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    fontFamily: "Montserrat_400Regular",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "white",
    textAlign: "left",
    fontFamily: "Montserrat_400Regular",
  },
  
  
});

export default globalStyles;
