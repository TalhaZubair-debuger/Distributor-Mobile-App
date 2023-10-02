import { FlatList, SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import CommonFlatList from '../../utils/CommonFlatList';
import React, { useEffect, useState } from 'react';
import { app } from '../../firebaseConfig';
import { getDatabase, onValue, ref } from 'firebase/database';
import HostName from '../../utils/HostName';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AllShops({ navigation }) {
  const db = getDatabase(app);
  const shopsDataRef = ref(db, "ShopsData");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchShopData()
  }, [])

  const fetchShopData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem("jwtToken");
      const response = await fetch(`${HostName}shops/shop`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`
        },
        method: "GET"
      })
      const Data = await response.json();
      setData(Data.shops);
      // console.log(Data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure", "Failed to fetch Shops Data. Please try again later."
      );
    }
  };


  return (
    <View style={styles.body}>
      <View style={styles.flatlist}>
        <View style={styles.headingFlatlist}>
          <Text style={styles.head}>All Shops</Text>
        </View>
      </View>
      <View style={styles.flatlist}>
        <SafeAreaView>
          <FlatList
            data={data}
            renderItem={({ item }) => <CommonFlatList
              title={item.shopName}
              shopId={item._id}
              navigation={navigation} />}
            keyExtractor={item => item._id}

          />
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 10,
    boxShadow: '5px 5px',
    elevation: 20,
    shadowColor: '#777777bb',
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5
    // justifyContent: 'center',
  },
  headingFlatlist: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  head: {
    fontSize: 30,
    fontWeight: 600,
  },
})