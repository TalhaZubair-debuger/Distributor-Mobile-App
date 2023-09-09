import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { FlatList } from "react-native";
import VendorsFlatList from "../../utils/VendorsFlatList";
import CommonButton from "../../utils/CommonButton";

export function Finance({ navigation }) {
  const data = [
    {
      id: 1,
      title: "P&G",
      products: ["Handfree", "Hair Straightener"],
    },
    {
      id: 2,
      title: "Unilever",
      products: ["Noodles", "Dove soap"],
    },
    {
      id: 3,
      title: "Vivo",
      products: ["v21", "v20"],
    },
    {
      id: 4,
      title: "Apple",
      products: ["IPhone 14", "IPhone 14 Pro Max"],
    },
  ];
  const navigateToIndividualShop = () => {
    navigation.navigate("Finance");
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Top Vendors</Text>
          </View>
          <SafeAreaView>
            <View style={styles.flatlist}>
              <SafeAreaView>
                <TouchableOpacity onPress={navigateToIndividualShop}>
                  <FlatList
                    data={data}
                    renderItem={({ item, products }) => (
                      <VendorsFlatList title={item.title} products={item.products} />
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </TouchableOpacity>
              </SafeAreaView>
            </View>
          </SafeAreaView>
          <CommonButton
          title={"Products Re-Stock"}
          color={"#000"}
          style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
          handleOnPress={() => navigation.navigate("ReOrder Products")}
        />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: 'center',
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center", // Aligns the boxes to the top right corner
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
    fontSize: 45,
    fontWeight: "600",
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
});

export default Finance;
