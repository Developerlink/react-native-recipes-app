import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummyData";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector, useDispatch } from "react-redux";

export default function FavoritesScreen({ navigation }) {
  const { favoriteMeals } = useSelector((state) => state.meals);

  useEffect(() => {
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

  return <MealList navigation={navigation} meals={favoriteMeals} />;
}
