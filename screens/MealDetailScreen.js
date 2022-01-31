import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function MealDetailScreen({navigation}) {
  return (
    <View>
      <Text>MealDetail</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
