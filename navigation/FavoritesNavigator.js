import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import MealDetailScreen from "../screens/MealDetailScreen";
import { View } from "react-native";
import FavoritesScreen from "../screens/FavoritesScreen";
import stackOptions from "../constants/stackNavigatorOptions";

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
          ...stackOptions
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
