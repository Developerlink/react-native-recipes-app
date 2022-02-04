import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummyData";

const mealsInJson = JSON.stringify(MEALS);
const meals = JSON.parse(mealsInJson);

const initialState = {
  meals: meals,
  filteredMeals: meals,
  favoriteMeals: [],
  filters: {
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  },
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.mealId
      );
      if (existingIndex >= 0) {
        const currentFavMeals = [...state.favoriteMeals];
        currentFavMeals.splice(existingIndex, 1);
        state.favoriteMeals = currentFavMeals;
      } else {
        const meal = state.meals.find(
          (meal) => meal.id === action.payload.mealId
        );
        const updatedFavMeals = [...state.favoriteMeals, meal];
        state.favoriteMeals = updatedFavMeals;
      }
    },
    setFilters: (state, action) => {
      //console.log("filtering");
      const { name, value } = action.payload;

      const newFilters = {
      ...state.filters,
      [name]: value,
    }

    state.filters = newFilters;
      const newFilteredMeals = state.meals.filter((meal) => {
        if (newFilters.isGlutenFree && !meal.isGlutenFree) return false;
        if (newFilters.isLactoseFree && !meal.isLactoseFree) return false;
        if (newFilters.isVegan && !meal.isVegan) return false;
        if (newFilters.isVegetarian && !meal.isVegetarian) return false;

        return true;
      });
      state.filteredMeals = newFilteredMeals;
    },
  },
});

export const { toggleFavorite, setFilters } = mealSlice.actions;
export default mealSlice.reducer;
