import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View} from "react-native";
import colors from "../constants/colors";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import defaultHeaderOptions from "../constants/defaultHeaderOptions";

const Stack = createNativeStackNavigator();

export default function FavoritesNavigator() {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        initialRouteName="categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.favorite,
          },
          ...defaultHeaderOptions
        }}
      >
        <Stack.Screen
          name="favorites"
          component={FavoritesScreen}
          options={{ title: "Favorites" }}
        />
        <Stack.Screen name="mealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </View>
  );
}
