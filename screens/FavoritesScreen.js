import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.screen}>
        <Text style={styles.message}>
          No meals have been marked as favorite yet!
        </Text>
      </View>
    );
  }

  return <MealList navigation={navigation} meals={favoriteMeals} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },
  message: {
    fontFamily: "open-sans-bold",
    fontSize: 22
  }
});
