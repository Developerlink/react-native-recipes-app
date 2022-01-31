import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function CategoryMealsScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, []);

  return (
    <View>
      <Text>CategoryMealsScreen</Text>
      <Button
        title="Go to Meal Details"
        onPress={() => navigation.navigate("MealDetail")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
