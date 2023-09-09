import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import ComonStyles from "../../utils/CommonCss";
import CustomButton from "../../utils/CommonButton";
import app from "../../firebaseConfig";
import { getDatabase, ref, push } from "firebase/database";

const AddStocks = ({ navigation }) => {
  const [product, SetProduct] = useState("");
  const [productID, SetProductID] = useState("");
  const [quantity, SetQuantity] = useState(0);
  const db = getDatabase(app);
  const stocksDataRef = ref(db, "Stocks");

  const submitStockData = async (event) => {
    event.preventDefault();
    const prod = product;
    const pID = productID;
    const Quantity = quantity;

    const formData = { prod, pID, Quantity };
    try {
      if (prod === "" || pID === "" || Quantity === null) {
        Alert.alert("Failure", "Please fill form completely");
      } else {
        push(stocksDataRef,formData);
        SetProduct("");
        SetProductID("");
        SetQuantity(null);
        Alert.alert("Success", "Product added succesfully");
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Failure",
        "Failed to add product. Please try again later."
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.flatlist}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Add Stock</Text>
          </View>
          <TextInput
            placeholder="Product Name"
            style={ComonStyles.inputStyle1}
            value={product}
            inputMode="text"
            onChangeText={(newValue) => SetProduct(newValue)}
          />
          <TextInput
            placeholder="Product ID"
            style={ComonStyles.inputStyle1}
            value={productID}
            inputMode="text"
            onChangeText={(newValue) => SetProductID(newValue)}
          />
          <TextInput
            placeholder="Quantity"
            style={ComonStyles.inputStyle1}
            value={quantity}
            inputMode="numeric"
            onChangeText={(newValue) => SetQuantity(newValue)}
          />
          <CustomButton
            title={"Add Product"}
            color={"#000"}
            style={{ width: "80%", borderRadius: 10, margin: 10 }}
            handleOnPress={submitStockData}
          />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
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
});

export default AddStocks;
