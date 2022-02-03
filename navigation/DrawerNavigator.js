import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabMealsNavigator from "./TabMealsNavigator";
import FiltersNavigator from "./FiltersNavigator";
import colors from "../constants/colors";
import defaultHeaderOptions from "../constants/defaultHeaderOptions";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="tabs"
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary, height: 80 },
        ...defaultHeaderOptions,
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: "open-sans-bold",
        },
        drawerActiveTintColor: colors.secondary
      }}
    >
      <Drawer.Screen
        name="tabs"
        component={TabMealsNavigator}
        options={{ headerShown: false, title: "Meal Categories" }}
      />
      <Drawer.Screen
        name="filters"
        component={FiltersNavigator}
        options={{ title: "Filters" }}
      />
    </Drawer.Navigator>
  );
}
