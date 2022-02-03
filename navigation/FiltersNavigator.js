import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import MealDetailScreen from "../screens/MealDetailScreen";
import { View } from "react-native";
import FiltersScreen from "../screens/FiltersScreen";
import defaultHeaderOptions from "../constants/defaultHeaderOptions";

const Stack = createNativeStackNavigator();

export default function FiltersNavigator() {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          ...defaultHeaderOptions
        }}
      >
        <Stack.Screen
          name="Filters"
          component={FiltersScreen}
          options={{title: "Filters"}}
        />
      </Stack.Navigator>
    </View>
  );
}
