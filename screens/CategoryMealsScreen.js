import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../data/dummyData";
import MealList from "../components/MealList";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

export default function CategoryMealsScreen({ navigation, route }) {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  const { filteredMeals } = useSelector((state) => state.meals);

  useEffect(() => {
    const catId = route.params.categoryId;
    const category = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({ title: category.title });

    const meals = filteredMeals.filter(
      (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    setDisplayedMeals(meals);
  }, []);

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.message}>No meals that fit your filters were found!</Text>
      </View>
    );
  }

  return <MealList navigation={navigation} meals={displayedMeals} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    fontFamily: "open-sans-bold",
    fontSize: 22
  }
})
