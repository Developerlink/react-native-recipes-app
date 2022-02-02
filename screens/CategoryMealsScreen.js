import React, { useEffect, useState } from "react";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealList from "../components/MealList";

export default function CategoryMealsScreen({ navigation, route }) {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  useEffect(() => {
    const catId = route.params.categoryId;
    const category = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({ title: category.title });

    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
    setDisplayedMeals(meals);
  }, []);

  return <MealList navigation={navigation} meals={displayedMeals} />;
}
