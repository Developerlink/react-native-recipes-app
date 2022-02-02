import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

export default function CategoryGridTile(props) {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{...styles.container, ...props.style}}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
  },
  container: {
      flex: 1,
      borderRadius: 15,
      backgroundColor: "#fff",
      shadowColor: "black",
      shadowOpacity: 0.50,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 1,
      padding: 15,
      justifyContent: "flex-end",
      alignItems: "center",
      opacity: 0.99,      
  },
  title: {
      fontFamily: "open-sans-bold",
      fontSize: 22,
      textAlign: "center",
      color: "black"
  }
});
