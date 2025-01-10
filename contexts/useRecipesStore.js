import { create } from "zustand";

const initialRecipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    ingredients: ["Makaron", "Mięso mielone", "Sos pomidorowy", "Cebula", "Czosnek"],
    description: "Ugotuj makaron, przygotuj sos bolognese i połącz wszystko razem.",
    image: require("../assets/images/potrawa.png"),
  },
  {
    id: "2",
    title: "Sałatka grecka",
    ingredients: ["Pomidor", "Ogórek", "Feta", "Oliwki", "Cebula"],
    description: "Pokrój warzywa, dodaj ser feta i oliwki. Polej oliwą z oliwek.",
    image: require("../assets/images/potrawa.png"),
  },
  {
    id: "3",
    title: "Naleśniki",
    ingredients: ["Mleko", "Jajka", "Mąka", "Sól", "Cukier"],
    description: "Przygotuj ciasto naleśnikowe i usmaż naleśniki na patelni.",
    image: require("../assets/images/potrawa.png"),
  },
];

const useRecipesStore = create((set) => ({
  recipes: initialRecipes,
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));

export default useRecipesStore;
