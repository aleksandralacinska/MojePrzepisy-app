import { create } from "zustand";

const initialRecipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    ingredients: ["Makaron", "Mięso mielone", "Sos pomidorowy", "Cebula", "Czosnek"],
    description: "Ugotuj makaron, przygotuj sos bolognese i połącz wszystko razem.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "2",
    title: "Sałatka grecka",
    ingredients: ["Pomidor", "Ogórek", "Feta", "Oliwki", "Cebula"],
    description: "Pokrój warzywa, dodaj ser feta i oliwki. Polej oliwą z oliwek.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "3",
    title: "Naleśniki",
    ingredients: ["Mleko", "Jajka", "Mąka", "Sól", "Cukier"],
    description: "Przygotuj ciasto naleśnikowe i usmaż naleśniki na patelni.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "4",
    title: "Spaghetti Bolognese",
    ingredients: ["Makaron", "Mięso mielone", "Sos pomidorowy", "Cebula", "Czosnek"],
    description: "Ugotuj makaron, przygotuj sos bolognese i połącz wszystko razem.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "5",
    title: "Sałatka grecka",
    ingredients: ["Pomidor", "Ogórek", "Feta", "Oliwki", "Cebula"],
    description: "Pokrój warzywa, dodaj ser feta i oliwki. Polej oliwą z oliwek.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "6",
    title: "Naleśniki",
    ingredients: ["Mleko", "Jajka", "Mąka", "Sól", "Cukier"],
    description: "Przygotuj ciasto naleśnikowe i usmaż naleśniki na patelni.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "7",
    title: "Spaghetti Bolognese",
    ingredients: ["Makaron", "Mięso mielone", "Sos pomidorowy", "Cebula", "Czosnek"],
    description: "Ugotuj makaron, przygotuj sos bolognese i połącz wszystko razem.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "8",
    title: "Sałatka grecka",
    ingredients: ["Pomidor", "Ogórek", "Feta", "Oliwki", "Cebula"],
    description: "Pokrój warzywa, dodaj ser feta i oliwki. Polej oliwą z oliwek.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
  {
    id: "9",
    title: "Naleśniki",
    ingredients: ["Mleko", "Jajka", "Mąka", "Sól", "Cukier"],
    description: "Przygotuj ciasto naleśnikowe i usmaż naleśniki na patelni.",
    image: require("../assets/images/potrawa.png"),
    isLiked: false,
  },
];

const useRecipesStore = create((set) => ({
  recipes: initialRecipes,

  // Funkcja dodawania przepisu
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Funkcja usuwania przepisu
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Funkcja lajkowania
  toggleLike: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isLiked: !recipe.isLiked } : recipe
      ),
    })),

  // Funkcja aktualizacji przepisu
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),
}));

export default useRecipesStore;
