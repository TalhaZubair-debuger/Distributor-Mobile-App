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
  import { getDatabase, ref, push } from "firebase/database";
  
  const AddArea = () => {
    const [areaName, setAreaName] = useState("");
    const [id, SetId] = useState(null);
    const db = getDatabase(app);
    const areasDataRef = ref(db, "Areas");
  
    const submitShopData = async (event) => {
      event.preventDefault();
      const Id = id;
      if (
        areaName === "" ||
        Id === null
      ) {
        Alert.alert("Failure", "Please fill form completely");
      } else {
        const formData = { areaName, Id };
  
        try {
          push(areasDataRef, formData);
        } catch (error) {
          console.log(error);
        }
        setAreaName("");
        SetId(null);
        Alert.alert("Success", "Shop added succesfully");
      }
    };
    return (
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.background}>
            <Text style={styles.heading1}>Add New Area</Text>
          </View>
          <View style={styles.background}>
            <TextInput
              placeholder="Area Name"
              style={ComonStyles.inputStyle1}
              value={areaName}
              inputMode="text"
              onChangeText={(newValue) => setAreaName(newValue)}
              required
            />
            <TextInput
              placeholder="Area Code"
              style={ComonStyles.inputStyle1}
              value={id}
              inputMode="numeric"
              onChangeText={(newValue) => SetId(newValue)}
              required
            />
            <CustomButton
              title={"Add Area"}
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
  
  export default AddArea;
  