import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import Checkbox from "expo-checkbox";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function SearchHeader() {
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(15000);

  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);

  const onPressCross = () => {
    setSearch(null);
  };
  return (
    <View style={styles.searchContainer}>
      <Image
        style={styles.searchIcon}
        source={require("../icons/search.png")}
      />
      <TextInput
        placeholderTextColor={"#A2A2A2"}
        placeholder="Try ‘logo’"
        style={styles.input}
        onChangeText={setSearch}
        value={search}
      />

      <View style={styles.headerRightContainer}>
        <TouchableOpacity onPress={() => onPressCross()}>
          <Image
            style={styles.crossIcon}
            source={require("../icons/cross.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={styles.filterIcon}
            source={require("../icons/filter.png")}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.filterResultText}>Filter Results</Text>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../images/cross.png")}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.priceText}>price</Text>

              <Text style={styles.sliderValue}>N{value}</Text>
              <View style={styles.sliderWrapper}>
                <Slider
                  onValueChange={(value) => setValue(value)}
                  thumbTintColor=""
                  style={{ width: 231, height: 50 }}
                  minimumValue={0}
                  step={5000}
                  value={value}
                  maximumValue={50000}
                  minimumTrackTintColor="#5377B1"
                  maximumTrackTintColor="#C4C4C4"
                  thumbImage={
                    Platform.OS === "android"
                      ? require("../icons/thumb.png")
                      : ""
                  }
                />

                <Text style={styles.maximumText}>Maximum</Text>
              </View>
            </View>

            <Text
              style={{ ...styles.priceText, marginTop: 10, marginBottom: 16 }}
            >
              Category
            </Text>

            <View style={styles.checkBoxesContainer}>
              <View style={styles.useshippingAddressContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#1CC88A" : "#808080"}
                />

                <Text style={styles.useshippingText}>Graphics & Design</Text>
              </View>
            </View>
            <View style={styles.checkBoxesContainer}>
              <View style={styles.useshippingAddressContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked2}
                  onValueChange={setChecked2}
                  color={isChecked2 ? "#1CC88A" : "#808080"}
                />

                <Text style={styles.useshippingText}>Logo Design</Text>
              </View>
            </View>

            <View style={styles.checkBoxesContainer}>
              <View style={styles.useshippingAddressContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked3}
                  onValueChange={setChecked3}
                  color={isChecked3 ? "#1CC88A" : "#808080"}
                />

                <Text style={styles.useshippingText}>Mobile Applications</Text>
              </View>
            </View>

            <View style={styles.checkBoxesContainer}>
              <View style={styles.useshippingAddressContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked4}
                  onValueChange={setChecked4}
                  color={isChecked4 ? "#1CC88A" : "#808080"}
                />

                <Text style={styles.useshippingText}>iOS Applications</Text>
              </View>
            </View>

            <View style={styles.checkBoxesContainer}>
              <View style={styles.useshippingAddressContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked5}
                  onValueChange={setChecked5}
                  color={isChecked5 ? "#1CC88A" : "#808080"}
                />

                <Text style={styles.useshippingText}>Android Applications</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.filterButton}
            >
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: WIDTH,
    height: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

    elevation: 5,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 16,
  },
  input: {
    width: WIDTH - 150,
    fontSize: 15,
    fontFamily: "Regular",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    right: 6,
  },
  crossIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 20,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  // Modal
  centeredView: {
    marginTop: RFValue(50),
  },
  modalView: {
    alignSelf: "center",
    width: widthPercentageToDP("90%"),
    paddingBottom:RFValue(20),
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: RFValue(14),
    textAlign: "center",
  },
  filterResultText: {
    color: "#33383F",
    fontSize: RFValue(22),
    fontFamily: "SemiBold",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(24),
    marginTop: RFValue(20),
  },
  priceText: {
    fontSize: RFValue(22),
    color: "#33383F",
    fontFamily: "Regular",
    marginTop: RFValue(23),
    marginHorizontal: RFValue(25),
  },
  sliderValue: {
    fontSize: RFValue(10),
    color: "#808080",
    fontFamily: "Bold",
    marginHorizontal: RFValue(50),
    marginTop: RFValue(20),
  },
  maximumText: {
    fontSize: RFValue(14),
    color: "#808080",
    fontFamily: "Regular",
  },
  sliderWrapper: {
    flexDirection: "row",
    marginHorizontal: RFValue(10),
  },
  checkBoxesContainer: {},
  useshippingAddressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(18),
  },
  checkbox: {
    margin: RFValue(8),
    borderRadius: 4,
  },

  useshippingText: {
    fontSize: RFValue(14),
    fontFamily: "Regular",
    color: "#808080",
    marginLeft: 8,
  },
  filterButton: {
    width: widthPercentageToDP("78%"),
    height: RFValue(42),
    backgroundColor: "#1CC88A",
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    
  },
  filterText: {
    fontSize: RFValue(14),
    fontFamily: "SemiBold",
    color: "#fff",
  },
});
