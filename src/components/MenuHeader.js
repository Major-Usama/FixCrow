import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
const WIDTH = Dimensions.get("window").width;

export default function MenuHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>N500,000</Text>
      </View>

      <View style={{ marginTop: 15 }}>
        <Image
          style={styles.profile}
          source={require("../icons/profile.png")}
        />
        <Text style={styles.name}>michelle_Haruna</Text>
      </View>

      <View style={styles.headerRight}>
        <Image
          style={{ width: 12, height: 12 }}
          source={require("../icons/edit.png")}
        />
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: WIDTH,
    height: 145,
    backgroundColor: "#1CC88A",
    flexDirection: "row",

    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  priceContainer: {
    width: 80,
    height: 24,
    backgroundColor: "#3D4C5F",
    borderWidth: 1,
    borderColor: "#38455E",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "Bold",
  },
  profile: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontFamily: "Regular",
    color: "#fff",
    marginTop: 7,
  },
  headerRight: {
    flexDirection: "row",
  },
  editProfileText: {
    fontSize: 13,
    fontFamily: "Regular",
    color: "#fff",
    marginLeft: 6,
  },
});
