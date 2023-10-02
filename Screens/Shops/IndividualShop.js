import { Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import CommonButton from '../../utils/CommonButton'
import { useRoute } from '@react-navigation/native';
import HostName from '../../utils/HostName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';

export function IndividualShop ({navigation}) {
  const [shopData, setShopData] = useState("");
  const route = useRoute();
  useEffect(()=>{
    getShopData();
  },[]);
  const getShopData = async() => {
    const shopId = route.params.shopId;
    
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}shops/shop/${shopId}`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const data = await response.json();
      setShopData(data.shop);
    } catch (error) {
      Alert.alert("Failed!", `${error.message}`);
      console.log(error);
    }
  }
    return (
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Shop</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Name: </Text>
            <Text>{shopData.shopName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Number: </Text>
            <Text>{shopData.registration}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Location: </Text>
            <Text>-</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Area: </Text>
            <Text>{shopData.area}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Owner CNIC: </Text>
            <Text>{shopData.ownerCnic}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Owner Contact: </Text>
            <Text>{shopData.ownerPhoneNo}</Text>
          </View>
        </View>

        <View style={styles.flatlist}>
          <View style={styles.align}>
            <CommonButton
              title={"Generate Sales Report"}
              color={"#000"}
              style={{ width: "90%", borderRadius: 10, margin: "5%" }}
              handleOnPress={() => console.log("Generated Report!")}
            />
          </View>
        </View>

        <View style={styles.flatlist}>
          <View style={styles.align}>
            <CommonButton
              title={"Shop Records"}
              color={"#000"}
              style={{ width: "90%", borderRadius: 10, margin: "5%" }}
              handleOnPress={() => navigation.navigate("Shop Records")}
            />
          </View>
        </View>
      </View>
    )
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
  row: {
    flexDirection: "row",
    justifyContent: "flex-start", // Aligns the boxes to the top right corner
    marginTop: 10, // Added margin to separate from the top
  },
  bold: {
    fontWeight: "600"
  }
})

export default IndividualShop