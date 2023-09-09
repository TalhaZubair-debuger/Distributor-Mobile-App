import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import ManageShopsFlatList from "../../utils/ManageShopsFlatList";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
// import database from "../../firebaseConfig";

export default function ManageShops({ navigation }) {
  // const data = [
  //   {
  //     id: 1,
  //     title: "ShopOne",
  //     purchase: "72500",
  //   },
  //   {
  //     id: 2,
  //     title: "ShopTwo",
  //     purchase: "85200",
  //   },
  //   {
  //     id: 3,
  //     title: "ShopThree",
  //     purchase: "105200",
  //   },
  //   {
  //     id: 4,
  //     title: "ShopFour",
  //     purchase: "99000",
  //   },
  //   {
  //     id: 5,
  //     title: "ShopFive",
  //     purchase: "88000",
  //   },
  //   {
  //     id: 6,
  //     title: "ShopSix",
  //     purchase: "115000",
  //   },
  // ];
  const [data, setData] = useState([]);
  const [dataChange, setDataChange] = useState(false);

  const deleteShopData = async (shopId) => {
    try {
      const response = await fetch(
        `https://distribution-application-b96ea-default-rtdb.firebaseio.com/ShopsData/${shopId}.json`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Delete was successful
        console.log("Shop data deleted successfully!");
        setDataChange(true)
      } else {
        console.error(response.status);
        Alert.alert("Failure", "Failed to delete shop data. Please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteShopData = (shopId) => {
    // const shopsRef = database.ref(`ShopsData/${shopId}`)
    // shopsRef.remove((err) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     setDataChange(true);
    //   }
    // })
  // };

  const fetchStockData = async () => {
    try {
      const response = await fetch(
        "https://distribution-application-b96ea-default-rtdb.firebaseio.com/ShopsData.json"
      );

      if (response.ok) {
        const responseData = await response.json();

        const dataArray = Object.keys(responseData).map((key) => ({
          id: key,
          ...responseData[key],
        }));
        setData(dataArray);
      } else {
        console.error(response.status);
        Alert.alert(
          "Failure",
          "Failed to fetch shop data. Please try again later."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStockData();
  }, [window.onload, dataChange]);
  // const navigateToIndividualShop = () => {
  //   navigation.navigate("Individual Shop");
  // };
  return (
    <View style={styles.body}>
      <View style={styles.flatlist}>
        <View style={styles.headingFlatlist}>
          <Text style={styles.head}>Manage Shops</Text>
        </View>
      </View>
      <View style={styles.flatlist}>
        <SafeAreaView>
          <TouchableOpacity>
            <FlatList
              data={data}
              renderItem={({ item }) => (

                <View style={styles.item}>
                  <Text style={styles.title}>{item.SName}</Text>
                  <Text style={styles.purchase}>
                    <View style={styles.fontawesome}>
                      <Text style={styles.innerFonts}>
                        <FontAwesome5 name={"edit"} size={20} color={"#aaaaaa"} />
                      </Text>
                      <Text style={styles.innerFonts}>
                        {/* <Button onPress={() => deleteShopData(item.Id)}>
                          <FontAwesome5 name={"trash-alt"} size={20} color={"#ff0000"} />
                        </Button> */}
                      </Text>
                    </View>
                  </Text>
                </View>

              )}
              keyExtractor={(item) => item.id}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
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
  item: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    boxShadow: "5px 5px #777777bb",
    // elevation: 20,
    // shadowColor: '#777777bb',
    backgroundColor: "#dddddd55",
    marginBottom: 5,
    height: 60,
  },
  title: {
    fontSize: 20,
    flex: 1,
    justifyContent: "center",
    textAlign: "left",
    maxWidth: 150,
    borderRightColor: "#aaa",
    borderRightWidth: 2,
    marginLeft: 5,
  },
  purchase: {
    flex: 1,
    justifyContent: "center",
    fontSize: 20,
    textAlign: "right",
    marginRight: 5,
  },
  color: {
    fontSize: 20,
    color: "#00FF00",
  },
  fontawesome: {
    margin: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerFonts: {
    margin: 10,
  },
});
