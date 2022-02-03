import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WIDTH = Dimensions.get("window").width;

export default function Menu(props) {
  return (
    <TouchableOpacity
      onPress={() => console.log("Menu Pressed")}
      style={styles.menuContainer}
    >
      <Image style={styles.icon} source={props.image} />
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>{props.title}</Text>

        <View style={styles.seprator} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Regular",
  },
  seprator: {
    width: WIDTH - 50,
    height: 1,
    backgroundColor: "#F2F2F2",
    marginTop: 15,
  },
});
