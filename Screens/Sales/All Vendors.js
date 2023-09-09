import { View, Text, VirtualizedList } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const AllVendors = ({ navigation }) => {
  return (
    <View>
      <View style={styles.body}>
        <VirtualizedList>
          <View style={styles.flatlist}>
            <View style={styles.line}>
              <Text style={styles.bold}>Unilever</Text>
              <Text>100 products</Text>
            </View>
          </View>
        </VirtualizedList>
      </View>
    </View>
  );
};

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
    margin: 5,
    padding: 5,
  },
  line: {
    flex: 1,
    flexDirection: "row",
  },
  bold: {
    fontWeight: "600",
  },
});
export default AllVendors;
