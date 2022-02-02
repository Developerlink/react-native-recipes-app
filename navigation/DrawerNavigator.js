import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabMealsNavigator from "./TabMealsNavigator";
import FiltersNavigator from "./FiltersNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="tabs" component={TabMealsNavigator} />
            <Drawer.Screen name="filters" component={FiltersNavigator} />
        </Drawer.Navigator>
    )
}
