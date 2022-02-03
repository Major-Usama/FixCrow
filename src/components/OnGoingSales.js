import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function OnGoingSales(props) {
  return (
    <View style={styles.ongoingSalesContainer}>
      <Image style={styles.icon} source={props.image} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ongoingSalesContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth:1.5,
    borderColor:'#F1F1F1',
    width:165,
    height:90,
    borderRadius:8,
    paddingHorizontal:16,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  title: {
    fontSize: 11,
    fontFamily: "Regular",
    color: "#808080",
  },
  subtitle: {
    fontSize: 21,
    fontFamily: "Regular",
    color: "#1E262F",
    marginTop: 5,
  },
});
