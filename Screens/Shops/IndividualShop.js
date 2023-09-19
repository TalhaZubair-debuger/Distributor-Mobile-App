import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import CommonButton from '../../utils/CommonButton'

export function IndividualShop ({navigation}) {
    return (
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Shop</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Name: </Text>
            <Text>Elegent Mart</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Number: </Text>
            <Text>123456</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Location: </Text>
            <Text>80 C</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Shop Area: </Text>
            <Text>Iqbal Avenue</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Owner Name: </Text>
            <Text>Khalid</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Owner Contact: </Text>
            <Text>0300000000</Text>
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