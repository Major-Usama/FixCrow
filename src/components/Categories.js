import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Categories(props) {
  return (
    <TouchableOpacity style={styles.categoriesContainer}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    width: 172,
    height: 55,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#F1F1F1",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#1E262F",
    fontFamily: "Regular",
  },
});
