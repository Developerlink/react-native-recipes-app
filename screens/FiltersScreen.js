import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import colors from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        trackColor={{ true: colors.secondaryLight, false: "lightgrey" }}
        thumbColor={colors.secondary}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

export default function FiltersScreen({ navigation }) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  useEffect(() => {
    const saveFilters = () => {
      const appliedFilters = {
        isGlutenFree,
        isLactoseFree,
        isVegan,
        isVegetarian,
      };

      console.log(appliedFilters);
    };

    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.screen}>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onValueChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onValueChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onValueChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onValueChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  label: {
    fontFamily: "open-sans",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
