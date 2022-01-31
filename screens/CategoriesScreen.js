import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DUMMY_CATEGORIES } from "../data/dummyData";

export default function CategoriesScreen({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate("CategoryMeals", { title: itemData.item.title });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={DUMMY_CATEGORIES}
      renderItem={renderGridItem}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
