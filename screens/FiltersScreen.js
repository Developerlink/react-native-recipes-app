import React, {useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

export default function FiltersScreen(props) {

  useEffect(() => {
    navigation.setOptions({      
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => console.log("Marked as favorite")}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View>
      <Text>Filters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
