import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import ComonStyles from "../../utils/CommonCss";
import CustomButton from "../../utils/CommonButton";
import React, { useState } from "react";
import app from "../../firebaseConfig";
import { getDatabase, onValue, ref, set, push } from "firebase/database";

const AddShop = () => {
  const [shopName, SetShopName] = useState("");
  const [id, SetId] = useState(null);
  const [registration, SetRegistration] = useState("");
  const [number, SetNumber] = useState(null);
  const [cnic, SetCnic] = useState(null);
  const db = getDatabase(app);
  const shopsDataRef = ref(db, "ShopsData");

  const submitShopData = async (event) => {
    event.preventDefault();
    const SName = shopName;
    const Id = id;
    const reg = registration;
    const num = number;
    const nic = cnic;
    if (
      SName === "" ||
      Id === null ||
      reg === "" ||
      num === null ||
      nic === null
    ) {
      Alert.alert("Failure", "Please fill form completely");
    } else {
      const formData = { SName, Id, reg, num, nic };

      try {
        push(shopsDataRef, formData);
      } catch (error) {
        console.log(error);
      }
      SetShopName("");
      SetId(null);
      SetRegistration("");
      SetNumber(null);
      SetCnic(null);
      Alert.alert("Success", "Shop added succesfully");
    }
  };
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.background}>
          <Text style={styles.heading1}>Add New Shop</Text>
        </View>
        <View style={styles.background}>
          <TextInput
            placeholder="Shop Name"
            style={ComonStyles.inputStyle1}
            value={shopName}
            inputMode="text"
            onChangeText={(newValue) => SetShopName(newValue)}
            required
          />
          <TextInput
            placeholder="Shop Id"
            style={ComonStyles.inputStyle1}
            value={id}
            inputMode="numeric"
            onChangeText={(newValue) => SetId(newValue)}
            required
          />
          <TextInput
            placeholder="Shop Registration No."
            style={ComonStyles.inputStyle1}
            value={registration}
            inputMode="text"
            onChangeText={(newValue) => SetRegistration(newValue)}
            required
          />
          <TextInput
            placeholder="Owner Phone No."
            style={ComonStyles.inputStyle1}
            value={number}
            inputMode="numeric"
            onChangeText={(newValue) => SetNumber(newValue)}
            required
          />
          <TextInput
            placeholder="Owner Identity No."
            style={ComonStyles.inputStyle1}
            value={cnic}
            inputMode="numeric"
            onChangeText={(newValue) => SetCnic(newValue)}
            required
          />

          <CustomButton
            title={"Add Shop"}
            color={"#000"}
            style={{ width: "80%", borderRadius: 10, margin: 10 }}
            handleOnPress={submitShopData}
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
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 10,
    boxShadow: "5px 5px",
    elevation: 20,
    shadowColor: "#777777bb",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: 'center',
  },
  heading1: {
    fontSize: 30,
    fontWeight: 600,
  },
  text: {
    fontSize: 10,
    color: "#000",
  },
  text15: {
    fontSize: 15,
    color: "#000",
  },
  button: {
    margin: 10,
  },
});

export default AddShop;
