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
  },
  inputBig: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    backgroundColor: "#f9f9f9",
    height: "50%",
    textAlignVertical: "top"
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
    fontWeight: "600",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  textW: {
    fontSize: 16,
    color: "white",
  },
  textIngredient: {
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
    padding: 8,
    borderRadius: 5,
    marginVertical: 4,
  },
  welcomeTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginTop: 350,
    marginBottom: 150,
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
    fontWeight: "bold",
    color: "white",
  },
  recipeDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "white",
    textAlign: "left",
  },
  
  
});

export default globalStyles;
