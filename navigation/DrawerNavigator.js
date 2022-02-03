import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabMealsNavigator from "./TabMealsNavigator";
import FiltersNavigator from "./FiltersNavigator";
import colors from "../constants/colors";
import defaultHeaderOptions from "../constants/defaultHeaderOptions";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

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
        drawerActiveTintColor: colors.secondary,        
        headerShown: false
      }
    }
    >
      <Drawer.Screen
        name="tabs"
        component={TabMealsNavigator}
        options={{ title: "Meal Categories" }}
      />
      <Drawer.Screen
        name="filters"
        component={FiltersNavigator}
        options={{ title: "Filters", }}
      />
    </Drawer.Navigator>
  );
}
