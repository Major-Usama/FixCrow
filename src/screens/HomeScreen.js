import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import SearchHeader from "../components/SearchHeader";
import OnGoingSales from "../components/OnGoingSales";
import Categories from "../components/Categories";
import Card from "../components/Card";

const MyfixesData = [
  {
    id: "1",
    image: require("../images/Fixes/fix1.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Fixes/profile.png"),
    price: "N15,000",
    type: "star",
  },
  {
    id: "2",
    image: require("../images/Fixes/fix2.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Fixes/profile.png"),
    price: "N10,000",
    type: "star",
  },
];

const FeaturedData = [
  {
    id: "1",
    image: require("../images/Features/f1.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Fixes/profile.png"),
    profile: require("../images/Features/profilef.png"),
    price: "N15,000",
    type: "star",
    price: "N2,500",
  },
  {
    id: "2",
    image: require("../images/Features/f2.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "20,000",
    type: "trusted",
  },
  {
    id: "3",
    image: require("../images/Features/f3.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "N100,000",
    type: "star",
  },
  {
    id: "4",
    image: require("../images/Features/f4.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "N15,000",
    type: "trusted",
  },
  {
    id: "5",
    image: require("../images/Features/f5.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "N15,000",
    type: "star",
  },
  {
    id: "6",
    image: require("../images/Features/f6.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "N15,000",
    type: "star",
  },
  {
    id: "7",
    image: require("../images/Features/f1.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "N15,000",
    type: "star",
  },
  {
    id: "8",
    image: require("../images/Features/f2.jpg"),
    title: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. Enim.",
    name: "elijahTomilawa",
    profile: require("../images/Features/profilef.png"),
    price: "N15,000",
    type: "star",
  },
];

export default function HomeScreen() {
  const renderItemFixes = ({ item }) => (
    <Card
      image={item.image}
      title={item.title}
      name={item.name}
      profile={item.profile}
      price={item.price}
      type={item.type}
    />
  );

  const renderItemFeatures = ({ item }) => (
    <Card
      image={item.image}
      title={item.title}
      name={item.name}
      profile={item.profile}
      price={item.price}
      type={item.type}
    />
  );


  const BottomFlatlist = ()=>

  {
    return (
    <View>
  <View style={styles.myFixesMainContainer}>
          <Text style={styles.fixesText}>Featured</Text>

          <View>
            <FlatList
             nestedScrollEnabled={false}
              contentContainerStyle={{ marginTop: 32 }}
              data={FeaturedData}
              renderItem={renderItemFeatures}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>+ See More</Text>
        </TouchableOpacity>
    </View>
    )}

    const TopFlatlist = ()=>

  {
    return (
    <View>
       <SearchHeader />

<View style={styles.ongoingSalesContainer}>
  <OnGoingSales
    image={require("../icons/sales.png")}
    title="Ongoing Sales"
    subtitle="10"
  />
  <OnGoingSales
    image={require("../icons/orders.png")}
    title="Ongoing Orders"
    subtitle="4"
  />
</View>

<View style={styles.categoreisMainContainer}>
  <View style={styles.categoreisSubContainer}>
    <Text style={styles.categoriesText}>Categories</Text>

    <Text style={styles.seeAllText}>See All</Text>
  </View>

  <View style={styles.CategoriesfirstRow}>
    <Categories title="Graphics & Design" />
    <Categories title="Video & Animation" />
  </View>
  <View style={styles.CategoriesfirstRow}>
    <Categories title="Programming & Tech" />
    <Categories title="Writing" />
  </View>
</View>
<Text style={styles.fixesText}>My Fixes</Text>
    </View>
    )}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      {/* <ScrollView
    nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      > */}
       

        <View style={styles.myFixesMainContainer}>
          

          <View>
            <FlatList
            showsVerticalScrollIndicator={false}
              ListHeaderComponent={<TopFlatlist />}
              nestedScrollEnabled={false}
              contentContainerStyle={{ marginTop: 32,paddingBottom:100, }}
              data={MyfixesData}
              renderItem={renderItemFixes}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<BottomFlatlist />}
            />
          </View>
        </View>

      
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
  },
  ongoingSalesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 32,
  },
  categoriesText: {
    fontSize: 23,
    color: "#33383F",
    fontFamily: "SemiBold",
  },
  seeAllText: {
    color: "#1CC88A",
    fontSize: 13,
    fontFamily: "Regular",
  },
  categoreisSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginTop: 48,
    marginBottom: 18,
  },
  CategoriesfirstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  fixesText: {
    fontSize: 23,
    color: "#33383F",
    fontFamily: "SemiBold",
    marginTop: 25,
    marginHorizontal: 18,
    marginBottom:20,
  },
  seeMoreButton: {
    width: 80,
    height: 35,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 34,
  },
  seeMoreText: {
    fontSize: 13,
    color: "#1CC88A",
    fontFamily: "Regular",
  },
});
