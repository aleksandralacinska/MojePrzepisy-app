import { create } from "zustand";

const initialRecipes = [
  {
    id: "1",
    title: "Spaghetti Bolognese",
    ingredients: ["Makaron", "Mięso mielone", "Sos pomidorowy", "Cebula", "Czosnek"],
    description: "Ugotuj makaron, przygotuj sos bolognese i połącz wszystko razem.",
    image: require("../assets/images/spaghetti.png"),
    isLiked: false,
  },
  {
    id: "2",
    title: "Sałatka grecka",
    ingredients: ["Pomidor", "Ogórek", "Feta", "Oliwki", "Cebula"],
    description: "Pokrój warzywa, dodaj ser feta i oliwki. Polej oliwą z oliwek.",
    image: require("../assets/images/salatka_grecka.png"),
    isLiked: false,
  },
  {
    id: "3",
    title: "Naleśniki z owocami",
    ingredients: ["Mleko", "Jajka", "Mąka", "Sól", "Cukier", "Owoce"],
    description: "Przygotuj ciasto naleśnikowe, usmaż naleśniki i podaj z owocami.",
    image: require("../assets/images/nalesniki.png"),
    isLiked: false,
  },
  {
    id: "4",
    title: "Zupa pomidorowa",
    ingredients: ["Pomidory", "Bulion", "Makaron", "Śmietana", "Pietruszka"],
    description: "Ugotuj pomidory z bulionem, dodaj makaron i udekoruj śmietaną.",
    image: require("../assets/images/zupa_pomidorowa.png"),
    isLiked: false,
  },
  {
    id: "5",
    title: "Kurczak w curry",
    ingredients: ["Pierś z kurczaka", "Curry", "Mleko kokosowe", "Cebula", "Ryż"],
    description: "Podsmaż kurczaka z curry, dodaj mleko kokosowe i podaj z ryżem.",
    image: require("../assets/images/kurczak_curry.png"),
    isLiked: false,
  },
  {
    id: "6",
    title: "Tarta z jabłkami",
    ingredients: ["Mąka", "Masło", "Jabłka", "Cukier", "Cynamon"],
    description: "Przygotuj ciasto kruche, dodaj jabłka z cynamonem i upiecz.",
    image: require("../assets/images/tarta.png"),
    isLiked: false,
  },
  {
    id: "7",
    title: "Pizza Margherita",
    ingredients: ["Ciasto na pizzę", "Sos pomidorowy", "Mozzarella", "Bazylia"],
    description: "Przygotuj ciasto, dodaj sos, mozzarellę i upiecz w piekarniku.",
    image: require("../assets/images/pizza.png"),
    isLiked: false,
  },
  {
    id: "8",
    title: "Sernik na zimno",
    ingredients: ["Ser twarogowy", "Galaretka", "Biszkopty", "Cukier", "Owoce"],
    description: "Połącz ser z galaretką, dodaj biszkopty i schłodź w lodówce.",
    image: require("../assets/images/sernik.png"),
    isLiked: false,
  },
  {
    id: "9",
    title: "Koktajl owocowy",
    ingredients: ["Banany", "Truskawki", "Mleko", "Jogurt", "Miód"],
    description: "Zblenduj owoce z mlekiem i jogurtem, dodaj miód dla smaku.",
    image: require("../assets/images/koktajl.png"),
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
