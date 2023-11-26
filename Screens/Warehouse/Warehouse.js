import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import WarehouseFlatList from "../../utils/WarehouseFlatlist";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import CustomButton from "../../utils/CommonButton";

export const Warehouse = ({ navigation }) => {
  const Productdata = [
    {
      id: 1,
      title: "Mobile Cover",
      quantity: "1234",
    },
    {
      id: 2,
      title: "Hair Straightener",
      quantity: "56",
    },
    {
      id: 3,
      title: "GTX 1660s",
      quantity: "195",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Current Warehouse Stock</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={Productdata}
              renderItem={({ item }) => (
                <WarehouseFlatList
                  title={item.title}
                  quantity={item.quantity}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>7 Days Data</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.viewbox}>
              <Text style={styles.heading}>Stock added</Text>
              <Text style={styles.numberDisplay}>3566</Text>
            </View>

            <View style={styles.viewbox}>
              <Text style={styles.heading}>New Products</Text>
              <Text style={styles.numberDisplay}>1</Text>
            </View>

            <View style={styles.viewbox}>
              <Text style={styles.heading}>Stock dispatched</Text>
              <Text style={styles.numberDisplay}>2655</Text>
            </View>
          </View>
        </View>
        <View style={styles.flatlist}>
          <CustomButton
            title={"Add New Stock"}
            color={"#000"}
            style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
            handleOnPress={() => navigation.navigate("AddStocks")}
          />
          <CustomButton
            title={"Manage Stock"}
            color={"#000"}
            style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
            handleOnPress={() => navigation.navigate("ManageStocks")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  flatlist: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 10,
    boxShadow: "5px 5px",
    elevation: 20,
    shadowColor: "#777777bb",
    margin: 5,
    padding: 5,
    // justifyContent: 'center',
  },
  headingFlatlist: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  head: {
    fontSize: 20,
    fontWeight: 600,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end", // Aligns the boxes to the top right corner
    marginTop: 10, // Added margin to separate from the top
  },
  viewbox: {
    flexDirection: "column",
    borderRadius: 10,
    elevation: 20,
    shadowColor: "#777777bb",
    backgroundColor: "#fff",
    margin: 5,
    width: "30%", // Set the width to a percentage or vw/vh
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 15,
  },
  numberDisplay: {
    fontSize: 30,
    fontWeight: "600",
  },
});

export default Warehouse;
