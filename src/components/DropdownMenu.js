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

export default function DropdownMenu(props) {
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
          source={require("../icons/menuIcons/job.png")}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>Job Request</Text>

          <View style={styles.seprator} />
        </View>

        <Image
          style={styles.dropdown}
          source={require("../icons/menuIcons/down.png")}
        />
      </TouchableOpacity>

      <View style={{ display: display }}>
        <MenuShort
          title="All Request"
          image={require("../icons/menuIcons/jall.png")}
        />
        <MenuShort
          title="My Request"
          image={require("../icons/menuIcons/jmy.png")}
        />
        <MenuShort
          title="Post New Request"
          image={require("../icons/menuIcons/jnew.png")}
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
