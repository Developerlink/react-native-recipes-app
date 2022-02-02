import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummyData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function MealDetailScreen({ navigation, route }) {
  const [displayedMeal, setDisplayedMeal] = useState();

  useEffect(() => {
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId);
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => console.log("Marked as favorite")}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View>
      <Text>{displayedMeal && displayedMeal.title}</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
