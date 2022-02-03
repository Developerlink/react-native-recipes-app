import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { View } from "react-native";
import defaultHeaderOptions from "../constants/defaultHeaderOptions";

const Stack = createNativeStackNavigator();

export default function MealsNavigator() {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          ...defaultHeaderOptions
        }}
      >
        <Stack.Screen
          name="categories"
          component={CategoriesScreen}
          options={{ title: "Meal Categories"}}
        />
        <Stack.Screen name="categoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="mealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </View>
  );
}
