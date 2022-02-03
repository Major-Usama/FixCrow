import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Card(props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.cardContainer}>
      <View style={styles.cardTopContainer}>
        <Image style={styles.mainImage} source={props.image} />

        <View>
          <Text style={styles.title}>{props.title}</Text>

          {props.type === "star" ? (
            <View style={styles.starContainer}>
              <Image
                style={styles.star}
                source={require("../icons/star.png")}
              />

              <Text style={styles.starText}>
                5.0
                <Text style={{ ...styles.starText, color: "#808080" }}>
                  (6)
                </Text>
              </Text>
            </View>
          ) : (
            <View style={styles.starContainer}>
              <Image
                style={styles.tick}
                source={require("../icons/tick.png")}
              />

              <Text style={styles.starText}>Trusted</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.cardFooterLeftContainer}>
          <Image source={props.profile} style={styles.profile} />

          <Text style={styles.nameText}>elijahTomilawa</Text>
        </View>

        <Text style={styles.price}>{props.price}</Text>
      </View>
      <View style={styles.seprator} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 16,
  },
  cardTopContainer: {
    flexDirection: "row",
  },
  mainImage: {
    width: 150,
    height: 84,
    borderRadius: 4,
    marginRight: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: "Regular",
    color: "#4E5561",
  },
  star: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  starText: {
    fontSize: 11,
    fontFamily: "Regular",
    color: "#F27415",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  cardFooterLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 14,
    height: 14,
  },
  nameText: {
    color: "#1E262F",
    fontSize: 10,
    fontFamily: "Regular",
    marginLeft: 4,
  },
  price: {
    color: "#33383F",
    fontFamily: "Bold",
    fontSize: 16,
  },
  seprator: {
    width: "120%",
    height: 1,
    backgroundColor: "#C4C4C4",
    alignSelf: "center",
    marginTop: 17,
    opacity: 0.2,
    marginBottom: 16,
  },

  tick: {
    width: 10,
    height: 7,
    marginRight: 6,
  },
});
