import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MenuShort from "./MenuShort";

const WIDTH = Dimensions.get("window").width;

export default function DropdownMenu2(props) {
  const [display, setDisplay] = React.useState("flex");
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          display === "flex" ? setDisplay("none") : setDisplay("flex")
        }
        style={styles.menuContainer}
      >
        <Image
          style={styles.icon}
          source={require("../icons/menuIcons/bill.png")}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>Bill Payment</Text>

          <View style={styles.seprator} />
        </View>

        <Image
          style={styles.dropdown}
          source={require("../icons/menuIcons/down.png")}
        />
      </TouchableOpacity>

      <View style={{ display: display }}>
        <MenuShort
          title="Airtime/Data"
          image={require("../icons/menuIcons/airtime.png")}
        />
        <MenuShort
          title="DSTV/GOtv"
          image={require("../icons/menuIcons/dstv.png")}
        />
      </View>
    </View>
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
  dropdown: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 2,
  },
});
