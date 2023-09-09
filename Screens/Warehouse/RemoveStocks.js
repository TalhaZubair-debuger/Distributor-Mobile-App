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

export default function RemoveStocks({ navigation }) {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Item1",
  //   },
  //   {
  //     id: 2,
  //     title: "Item2",
  //   },
  //   {
  //     id: 3,
  //     title: "Item3",
  //   },
  //   {
  //     id: 4,
  //     title: "Item4",
  //   },
  //   {
  //     id: 5,
  //     title: "Item5",
  //   },
  //   {
  //     id: 6,
  //     title: "Item6",
  //   },
  // ];
  const db = getDatabase(app);
  const stocksDataRef = ref(db, "Stocks");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchShopData();
  },[]);

  const fetchShopData = async () => {
    try {
      onValue(stocksDataRef, (snapshot) => {
        const data = snapshot.val();
        const stockArray = data ? Object.values(data) : [];
        setData(stockArray);
      });
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure",
        "Failed to fetch Stocks Data. Please try again later."
      );
    }
  };
  const navigateToIndividualShop = () => {
    navigation.navigate("Individual Shop");
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Remove Stocks</Text>
          </View>
        </View>
        <View style={styles.flatlist}>
          <SafeAreaView>
            <TouchableOpacity onPress={navigateToIndividualShop}>
              <FlatList
                data={data}
                renderItem={({ item, purchase }) => (
                  <RemoveStockFlatList
                    title={item.prod}
                    purchase={item.purchase}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </TouchableOpacity>
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
