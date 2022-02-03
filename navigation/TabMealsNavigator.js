import React from "react";
import { Platform, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import MealsNavigator from "./MealsNavigator";
import FavoritesNavigator from "./FavoritesNavigator";

let isAndroid = Platform.OS === "android" ? true : false;
isAndroid = true;

const Tab = isAndroid
  ? createMaterialBottomTabNavigator()
  : createBottomTabNavigator();

const tabScreenConfig = {
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: "grey",
  tabBarLabelStyle: { fontSize: 14, fontFamily: "open-sans-bold" },
  tabBarStyle: { height: 60, paddingTop: 5, paddingBottom: 5 },
};

export default function TabMealsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="favorites"
      shifting={true}
      screenOptions={tabScreenConfig}
    >
      <Tab.Screen
        name="Home"
        component={MealsNavigator}
        options={{
          headerShown: false,
          tabBarLabel: isAndroid ? (
            <Text style={{ fontFamily: "open-sans-bold" }}>Categories</Text>
          ) : (
            "Categories"
          ),
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="ios-restaurant"
              color={
                !isAndroid
                  ? tabInfo.focused
                    ? colors.primary
                    : "grey"
                  : "white"
              }
              size={23}
            />
          ),
          tabBarColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          headerShown: false,
          tabBarLabel: isAndroid ? (
            <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
          ) : (
            "Favorites"
          ),
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name="ios-star"
              color={
                !isAndroid
                  ? tabInfo.focused
                    ? colors.primary
                    : "grey"
                  : "white"
              }
              size={23}
            />
          ),
          tabBarColor: colors.favorite,
        }}
      />
    </Tab.Navigator>
  );
}
