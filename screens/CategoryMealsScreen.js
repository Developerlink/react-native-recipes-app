import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../data/dummyData";
import MealList from "../components/MealList";
import { useSelector, useDispatch } from "react-redux";

export default function CategoryMealsScreen({ navigation, route }) {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const { filteredMeals} = useSelector(state => state.meals);

  useEffect(() => {
    const catId = route.params.categoryId;
    const category = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({ title: category.title });

    const meals = filteredMeals.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
    setDisplayedMeals(meals);
  }, []);

  return <MealList navigation={navigation} meals={displayedMeals} />;
}
