import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import React, { useCallback, useState } from "react";
import VendorsFlatList from "../../utils/VendorsFlatList";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HostName from "../../utils/HostName";
import { Alert } from "react-native";

export default function AllVendors({ navigation }) {
  const [data, setData] = useState([]);
  useFocusEffect(
    useCallback(() => {
      fetchVendorData()
    }, [])
  )
  const fetchVendorData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}vendors/all-vendors`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      setData(Data.vendors);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure", error.message
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>All Vendors</Text>
          </View>
        </View>
        <View style={styles.flatlist}>
          <SafeAreaView>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <VendorsFlatList title={item.vendorName} id={item._id} navigation={navigation} />
              )}
              keyExtractor={(item) => item._id}
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
