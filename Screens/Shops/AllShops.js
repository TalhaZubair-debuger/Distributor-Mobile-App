import { FlatList, SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import CommonFlatList from '../../utils/CommonFlatList';
import React, { useEffect, useState } from 'react';
import { app } from '../../firebaseConfig';
import { getDatabase, onValue, ref } from 'firebase/database';

export default function AllShops({ navigation }) {
  const db = getDatabase(app);
  const shopsDataRef = ref(db, "ShopsData");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchShopData()
  },[])

  const fetchShopData = async () => {
    try {
      onValue(shopsDataRef, (snapshot) => {
        const data = snapshot.val();
        const productsArray = data ? Object.values(data) : [];
        setData(productsArray);
    })
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure", "Failed to fetch Shops Data. Please try again later."
      );
    }
  };

  const navigateToIndividualShop = () => {
    navigation.navigate('Individual Shop')
  }
  return (
    <View style={styles.body}>
      <View style={styles.flatlist}>
        <View style={styles.headingFlatlist}>
          <Text style={styles.head}>All Shops</Text>
        </View>
      </View>
      <View style={styles.flatlist}>
        <SafeAreaView>
          <TouchableOpacity
            onPress={navigateToIndividualShop}
          >
            <FlatList
              data={data}
              renderItem={({ item }) => <CommonFlatList title={item.SName} />}
              keyExtractor={item => item.id}

            />
          </TouchableOpacity>

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