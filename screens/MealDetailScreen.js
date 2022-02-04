import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import { scale } from "../utils/scaling";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/mealSlice";

const emptyMeal = {
  id: "",
  categoryIds: "",
  title: "",
  affordability: "",
  complexity: "",
  imageUrl: "test",
  duration: "",
  ingedients: [],
  steps: [],
  isGlutenfree: "",
  isVegan: "",
  isVegetarian: "",
  isLactoseFree: "",
};

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

export default function MealDetailScreen({ navigation, route }) {
  const [selectedMeal, setSelectedMeal] = useState(emptyMeal);
  const { meals, favoriteMeals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    const mealId = route.params.mealId;
    //const mealId = "m1";
    const meal = meals.find((meal) => meal.id === mealId);
    const isFavorited = favoriteMeals.some((meal)=> meal.id === mealId);

    navigation.setOptions({
      title:
        Dimensions.get("window").width < 400
          ? meal.title.length > 16
            ? meal.title.substr(0, 16) + "..."
            : meal.title
          : meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={isFavorited ? "ios-star" : "ios-star-outline"}
            onPress={() => {
              dispatch(toggleFavorite({ mealId: mealId }));
            }}
          />
        </HeaderButtons>
      ),
    });
    setSelectedMeal(meal);
  }, [dispatch, favoriteMeals]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingedients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step, index) => (
        <ListItem key={step}>
          {index + 1}. {step}
        </ListItem>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: scale(200),
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
