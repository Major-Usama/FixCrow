import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import React from "react";
import MenuHeader from "../components/MenuHeader";
import Menu from "../components/Menu";
import DropdownMenu from "../components/DropdownMenu";
import DropdownMenu2 from "../components/DropDownMenu2";

export default function MenuScreens() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1CC88A"
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <MenuHeader />

        <View style={styles.menuMainContainer}>
          <Menu title="Home" image={require("../icons/menuIcons/home.png")} />

          <DropdownMenu />
          <Menu
            title="Start Selling"
            image={require("../icons/menuIcons/selling.png")}
          />
          <Menu
            title="Manage Sales"
            image={require("../icons/menuIcons/sales.png")}
          />
          <Menu
            title="Manage Orders"
            image={require("../icons/menuIcons/orders.png")}
          />
          <Menu
            title="Finance"
            image={require("../icons/menuIcons/orders.png")}
          />
          <DropdownMenu2 />

          <Menu
            title="How it Works"
            image={require("../icons/menuIcons/hworks.png")}
          />
          <Menu
            title="Terms of Service"
            image={require("../icons/menuIcons/service.png")}
          />

          <Menu
            title="Contact US"
            image={require("../icons/menuIcons/contact.png")}
          />

          <View style={{ marginTop: 28 }}>
            <Menu
              title="Logout"
              image={require("../icons/menuIcons/logout.png")}
            />
          </View>
        </View>

        <Image
        style={styles.social}
        source={require('../icons/social.png')}
        />

        <Text
        style={styles.versionText}
        >v1.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuMainContainer: {
    marginTop: 15,
  },
  social:
  {
    width:90,
    height:23,
    alignSelf:'center',
    marginTop:35
  },
  versionText:
  {
    fontSize:10,
    color:'#808080',
    fontFamily:'Regular',
    textAlign:'center',
    marginTop:22,

  }
});
