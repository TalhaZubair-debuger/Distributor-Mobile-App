import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Button
} from "react-native";
import React, { Component } from "react";
import SalesFlatList from "../../utils/SalesFlatList";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../utils/CommonButton";
import CommonFlatList from '../../utils/CommonFlatList';
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Sales({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const width = windowWidth - 40;
  const Productdata = [
    {
      id: 1,
      title: "Mobile Cover",
      totalItems: "12950",
    },
    {
      id: 2,
      title: "Hair Straightener",
      totalItems: "8200",
    },
    {
      id: 3,
      title: "GTX 1660s",
      totalItems: "19500",
    },
  ];
  const data = [
    {
      id: 1,
      title: "ShopOne",
      purchase: "72500",
    },
    {
      id: 2,
      title: "ShopTwo",
      purchase: "85200",
    },
    {
      id: 3,
      title: "ShopThree",
      purchase: "105200",
    },
  ];
  const navigateToProductPage = () => {
    // navigation.navigate('Product Page')
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.viewbox}>
            <Text style={styles.heading}>Inventory Available</Text>
            <Text style={styles.numberDisplay}>10500</Text>
          </View>

          <View style={styles.viewbox}>
            <Text style={styles.heading}>Sold in one day</Text>
            <Text style={styles.numberDisplay}>1526</Text>
          </View>
        </View>

        <View style={styles.barchart}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Product Sales Chart</Text>
          </View>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April"],
              datasets: [
                {
                  data: [
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                    Math.random() * 1000,
                  ],
                },
              ],
            }}
            width={width} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: "#dddddd55",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 5,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 5,
            }}
          />
        </View>

        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Top Performing Products</Text>
          </View>
          <SafeAreaView>
            <TouchableOpacity onPress={navigateToProductPage}>
              <FlatList
                data={Productdata}
                renderItem={({ item, totalItems }) => (
                  <SalesFlatList
                    title={item.title}
                    totalItems={item.totalItems}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Top Performing Shops</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={data}
              renderItem={({ item, purchase }) => (
                <CommonFlatList title={item.title} purchase={item.purchase} />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>

        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Low Stock Products</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={data}
              renderItem={({ item, purchase }) => (
                <CommonFlatList title={item.title} purchase={item.purchase} />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>

        {/* <CustomButton
          title={"Products-Re-Stock"}
          color={"#000"}
          style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
          handleOnPress={() => navigation.navigate("ReOrder Products")}
        />
        <CustomButton
          title={"Vendors"}
          color={"#000"}
          style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
          handleOnPress={() => navigation.navigate("All Vendors")}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
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
    width: "45%", // Set the width to a percentage or vw/vh
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
  barchart: {
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
});

export default Sales;
