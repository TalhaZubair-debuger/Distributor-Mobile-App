import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CommonFlatList from "../../utils/CommonFlatList";
import React from "react";
import VendorsFlatList from "../../utils/VendorsFlatList";

export default function Vendors({ navigation }) {
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
    <View style={styles.body}>
      <View style={styles.flatlist}>
        <View style={styles.headingFlatlist}>
          <Text style={styles.head}>Vendors</Text>
        </View>
      </View>
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
    </View>
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
