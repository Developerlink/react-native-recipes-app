import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummyData";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function FavoritesScreen({ navigation, route }) {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  useEffect(() => {
    const catId = "c2";

    const meals = MEALS.filter(
      (meal) => meal.categoryIds.indexOf(catId) >= 0
    );
    setDisplayedMeals(meals);
    
    navigation.setOptions({      
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
      <MealList navigation={navigation} meals={displayedMeals}/>
  );
}


