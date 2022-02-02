import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../constants/colors";
import MealItem from "./MealItem";

export default function MealList(props) {
    const renderMealItem = (itemData) => {
        return (
            
            <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            onSelectMeal={() =>
                props.navigation.navigate("mealDetail", {
                    mealId: itemData.item.id,
                })
            }
            />
        );
      };

  return (
      <View style={styles.screen}>
      <FlatList
      style={{ width: "100%", padding: 5 }}
      data={props.meals}
      renderItem={renderMealItem}
      />
      </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  });