import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import RemoveStockFlatList from "../../utils/RemoveStockFlatlist";
import { app } from "../../firebaseConfig";
import { getDatabase, onValue, ref } from "firebase/database";
import HostName from '../../utils/HostName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

export default function RemoveStocks({ navigation }) {
  const db = getDatabase(app);
  const stocksDataRef = ref(db, "Stocks");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchShopData();
  },[]);
  const fetchShopData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}products/products`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      setData(Data.products);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure", "Failed to fetch Stock Data. Please try again later."
      );
    }
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Manage Stocks</Text>
          </View>
        </View>
        <View style={styles.flatlist}>
          <SafeAreaView>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <RemoveStockFlatList
                    title={item.productName}
                    navigation={navigation}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
          </SafeAreaView>
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
  flatlist: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 10,
    boxShadow: "5px 5px",
    elevation: 20,
    shadowColor: "#777777bb",
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    // justifyContent: 'center',
  },
  headingFlatlist: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  head: {
    fontSize: 30,
    fontWeight: 600,
  },
});
