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

export default function AllVendors({ navigation }) {
  const data = [
    {
      id: 1,
      title: "P&G",
    },
    {
      id: 2,
      title: "Unilever",
    },
    {
      id: 3,
      title: "Vivo",
    },
    {
      id: 4,
      title: "Apple"
    },
  ];

  return (
    <View style={styles.body}>
      {/* <ScrollView> */}
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
                <VendorsFlatList title={item.title} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      {/* </ScrollView> */}
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
