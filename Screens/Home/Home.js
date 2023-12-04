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
import React, { Component, useCallback, useState } from "react";
import SalesFlatList from "../../utils/SalesFlatList";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../utils/CommonButton";
import CommonFlatList from '../../utils/CommonFlatList';
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import HostName from "../../utils/HostName";
import { Alert } from "react-native";
import WarehouseFlatList from "../../utils/WarehouseFlatlist";

export function Home({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const width = windowWidth - 40;
  const [user, setUser] = useState();
  const [productData, setProductData] = useState();
  const [shopData, setShopData] = useState();
  const [lowStockProductData, setLowStockProductData] = useState();
  useFocusEffect(
    useCallback(() => {
      fetchUserDetails();
      fetchStockData();
      fetchShopData();
      fetchLowStockProductData();
    }, [])
  )
  const fetchUserDetails = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}user/get-user`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      setUser(Data.user);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure!", "No User Data found"
      );
    }
  }
  const fetchStockData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}products/top-products`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      setProductData(Data.products);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure!", "No Products found"
      );
    }
  };
  const fetchShopData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}shops/top-shops`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      setShopData(Data.shops);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure!", "No Products found"
      );
    }
  };
  const fetchLowStockProductData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}products/low-stock-products`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      if (!Data.products) {
        setLowStockProductData(null);
      }
      else {
        setLowStockProductData(Data.products);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure!", "No Products found"
      );
    }
  };
  const Data = [
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
            <Text style={styles.numberDisplay}>{user ? user.currentTotalStock : 0}</Text>
          </View>

          <View style={styles.viewbox}>
            <Text style={styles.heading}>Sold in one day</Text>
            <Text style={styles.numberDisplay}>NULL</Text>
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
            <FlatList
              data={productData}
              renderItem={({ item }) => (
                <SalesFlatList
                  title={item.productName}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          </SafeAreaView>
        </View>

        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Top Performing Shops</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={shopData}
              renderItem={({ item }) => (
                <CommonFlatList
                  title={item.shopName}
                  shopId={item._id}
                  navigation={navigation}
                  revenue={item.revenue}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          </SafeAreaView>
        </View>

        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Low Stock Products</Text>
          </View>
          <SafeAreaView>
          <FlatList
              data={lowStockProductData}
              renderItem={({ item }) => (
                <WarehouseFlatList
                  title={item.productName}
                  quantity={item.stockQuantity}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          </SafeAreaView>
        </View>

        <View style={styles.flatlist}>
        <CustomButton
            title={"Get Investment"}
            color={"#000"}
            style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
            handleOnPress={() => {console.log("Moving to Website")}}
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

export default Home;
