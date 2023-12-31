import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { Component } from "react";
import CommonButton from "../../utils/CommonButton";
import ComonStyles from "../../utils/CommonCss";
import CommonFlatList from "../../utils/CommonFlatList";
import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
} from "react-native-table-component";
import { ScrollView } from "react-native-gesture-handler";
import { LineChart } from "react-native-chart-kit";

export default function Shop({ navigation }) {
  const windowWidth = useWindowDimensions().width;
  const width = windowWidth - 40;
  const data = [
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
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={styles.viewbox}>
            <Text style={styles.heading}>All Shops</Text>
            <Text style={styles.numberDisplay}>20</Text>
          </View>

          <View style={styles.viewbox}>
            <Text style={styles.heading}>Areas</Text>
            <Text style={styles.numberDisplay}>6</Text>
          </View>

          <View style={styles.viewbox}>
            <Text style={styles.heading}>Shops closed</Text>
            <Text style={styles.numberDisplay}>2</Text>
          </View>
        </View>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Top Performing Shops</Text>
          </View>
          <SafeAreaView>
            <FlatList
              data={data}
              renderItem={({ item, purchase }) => (
                <CommonFlatList title={item.title} purchase={item.purchase} />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
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

        <View style={styles.align}>
          <CommonButton
            title={"Manage Shops"}
            color={"#000"}
            style={{ width: "80%", borderRadius: 10, margin: 10 }}
            handleOnPress={() => navigation.navigate("Manage Shops")}
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
    // justifyContent: 'center',
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
    width: "30%", // Set the width to a percentage or vw/vh
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
    // justifyContent: 'center',
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
  align: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
