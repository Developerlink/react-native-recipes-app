import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import colors from "../constants/colors";
import { setFilters } from "../store/mealSlice";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        name={props.name}
        trackColor={{ true: colors.secondaryLight, false: "lightgrey" }}
        thumbColor={colors.secondary}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const defaultFilters = {
  isGlutenFree: false,
  isLactoseFree: false,
  isVegan: false,
  isVegetarian: false,
};

export default function FiltersScreen({ navigation }) {
  // const [isGlutenFree, setIsGlutenFree] = useState(false);
  // const [isLactoseFree, setIsLactoseFree] = useState(false);
  // const [isVegan, setIsVegan] = useState(false);
  // const [isVegetarian, setIsVegetarian] = useState(false);
  //const [appliedFilters, setAppliedFilters] = useState(defaultFilters);
  const { filters } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   const saveFilters = () => {
  //     const appliedFilters = {
  //       isGlutenFree,
  //       isLactoseFree,
  //       isVegan,
  //       isVegetarian,
  //     };

  //     dispatch(setFilters(appliedFilters));
  //   };

  //   navigation.setOptions({
  //     headerRight: () => (
  //       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
  //         <Item title="save" onPress={saveFilters} />
  //       </HeaderButtons>
  //     ),
  //   });
  // }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  const onValueChangeHandler = (event) => {
    const { name, value } = event;
    // const newFilters = {
    //   ...appliedFilters,
    //   [name]: value,
    // }
    // setAppliedFilters(newFilters);
    dispatch(setFilters({ name, value }));
  };

  useEffect(() => {
    //console.log(appliedFilters);
  }, [filters]);

  return (
    <View style={styles.screen}>
      <FilterSwitch
        label="Gluten-free"
        value={filters.isGlutenFree}
        onValueChange={(value) =>
          onValueChangeHandler({ value: value, name: "isGlutenFree" })
        }
      />
      <FilterSwitch
        label="Lactose-free"
        value={filters.isLactoseFree}
        onValueChange={(value) =>
          onValueChangeHandler({ value: value, name: "isLactoseFree" })
        }
      />
      <FilterSwitch
        label="Vegan"
        value={filters.isVegan}
        onValueChange={(value) =>
          onValueChangeHandler({ value: value, name: "isVegan" })
        }
      />
      <FilterSwitch
        label="Vegetarian"
        value={filters.isVegetarian}
        onValueChange={(value) =>
          onValueChangeHandler({ value: value, name: "isVegetarian" })
        }
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
