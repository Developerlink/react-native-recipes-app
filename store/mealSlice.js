import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummyData";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS ,
    favoriteMeals: []
  };
  
  const mealSlice = createSlice({
    name: "meals",
    initialState,
    reducers: {
      get(state) {
        return state;
      },
    },
  });

export const mealActions = mealSlice.actions;
export default mealSlice.reducer;