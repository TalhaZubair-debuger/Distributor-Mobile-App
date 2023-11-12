import { FlatList, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import CommonButton from '../../utils/CommonButton'
import { useRoute } from '@react-navigation/native';
import HostName from '../../utils/HostName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';
import { Modal } from 'react-native';
import { TextInput } from 'react-native';
import CommonCss from "../../utils/CommonCss";

export function IndividualVendor({ navigation }) {
  const [shopData, setShopData] = useState("");
  const [productName, setProductName] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [productId, setProductId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditProductVisible, setModalEditProductVisible] = useState(false);
  const [modalAllProductVisible, setModalAllProductVisible] = useState(false);
  const route = useRoute();
  useEffect(() => {
    getShopData();
  }, []);
  const getShopData = async () => {
    // const shopId = route.params.shopId;

    // try {
    //   const jwtToken = await AsyncStorage.getItem("jwtToken");
    //   const response = await fetch(`${HostName}shops/shop/${shopId}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       'Authorization': `${jwtToken}`
    //     },
    //     method: "GET"
    //   })
    //   const data = await response.json();
    //   setShopData(data.shop);
    // } catch (error) {
    //   Alert.alert("Failed!", `${error.message}`);
    //   console.log(error);
    // }
  }

  data = [
    {
      id: 1,
      productName: "iPhone"
    },
    {
      id: 2,
      productName: "S23 Ultra"
    },
    {
      id: 3,
      productName: "Xaiomi"
    },
  ]
  return (
    <View style={styles.body}>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Add new product</Text>
          </View>
          <TextInput
            placeholder="Product Name"
            style={CommonCss.inputStyle1}
            value={productName}
            inputMode="text"
            onChangeText={(newValue) => setProductName(newValue)}
            required
          />
          <TextInput
            placeholder="Product Id"
            style={CommonCss.inputStyle1}
            value={productId}
            inputMode="numeric"
            onChangeText={(newValue) => setProductId(newValue)}
            required
          />
          <CommonButton
            title={"Add Product"}
            color={"#000"}
            style={{ width: "80%", borderRadius: 10, margin: 10, fontSize: 10 }}
            handleOnPress={() => { setModalVisible(!modalVisible); }}
          />
          <CommonButton
            title={"Cancel"}
            color={"#000"}
            style={{ width: "30%", borderRadius: 10, margin: 10, fontSize: 5 }}
            handleOnPress={() => { setModalVisible(!modalVisible); }}
          />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalAllProductVisible}
        onRequestClose={() => {
          setModalAllProductVisible(!modalAllProductVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>All products of Apple</Text>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.flatlistProducts}>
                  <Text>{item.productName}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <CommonButton
            title={"Close"}
            color={"#000"}
            style={{ width: "30%", borderRadius: 10, margin: 10, fontSize: 5 }}
            handleOnPress={() => { setModalAllProductVisible(!modalAllProductVisible) }}
          />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalEditProductVisible}
        onRequestClose={() => {
          setModalEditProductVisible(!modalEditProductVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.headingFlatlist}>
            <Text style={styles.head}>Edit Vendor Details</Text>
          </View>
          <TextInput
            placeholder="Vendor Name"
            style={CommonCss.inputStyle1}
            value={vendorName}
            inputMode="text"
            onChangeText={(newValue) => setVendorName(newValue)}
            required
          />
          <CommonButton
            title={"Update Vendor"}
            color={"#000"}
            style={{ width: "80%", borderRadius: 10, margin: 10, fontSize: 5 }}
            handleOnPress={() => { setModalEditProductVisible(!modalEditProductVisible) }}
          />
        </View>
      </Modal>


      <View style={styles.flatlist}>
        <View style={styles.headingFlatlist}>
          <Text style={styles.head}>Vendor</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold}>Vendor Name: </Text>
          <Text>{shopData.shopName}</Text>
          <Text>Apple</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold}>Vendor Number: </Text>
          <Text>{shopData.registration}</Text>
          <Text>123niub5ub2b6ou2b6</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold}>Vendor Products: </Text>
          <Text>{shopData.registration}</Text>
          <Text>iPhone15, iPad Pro, iMac Pro</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.bold}>Vendor Contact: </Text>
          <Text>{shopData.ownerPhoneNo}</Text>
          <Text>03174071947</Text>
        </View>
      </View>

      <View style={styles.flatlist}>
        <View style={styles.align}>
          <CommonButton
            title={"Sales Report"}
            color={"#000"}
            style={{ width: "90%", borderRadius: 10, margin: "5%" }}
            handleOnPress={() => console.log("Generated Report!")}
          />
          <CommonButton
            title={"Vendor Records"}
            color={"#000"}
            style={{ width: "90%", borderRadius: 10, margin: "5%" }}
            handleOnPress={() => navigation.navigate("Vendor Records")}
          />
        </View>
      </View>

      <View style={styles.flatlist}>
        <View style={styles.row}>
          <CommonButton
            title={"Add Product"}
            color={"#000"}
            style={{ width: "40%", borderRadius: 10, margin: "5%" }}
            handleOnPress={() => { setModalVisible(!modalVisible); }}
          />
          <CommonButton
            title={"All  Products"}
            color={"#000"}
            style={{ width: "40%", borderRadius: 10, margin: "5%" }}
            handleOnPress={() => setModalAllProductVisible(!modalAllProductVisible)}
          />
        </View>
      </View>

      <View style={styles.flatlist}>
        <View style={styles.row}>
          <CommonButton
            title={"Edit Vendor Details"}
            color={"#000"}
            style={{ width: "90%", borderRadius: 10, margin: "5%" }}
            handleOnPress={() => { setModalEditProductVisible(!modalEditProductVisible); }}
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
  flatlistProducts: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 5,
    margin: 5
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
  },
  bold: {
    fontWeight: "600"
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    padding: 5,
    elevation: 50,
    shadowColor: "#000",
    borderRadius: 10,
    shadowRadius: 20,
    borderColor: "#000",
    borderWidth: 1
  },
})

export default IndividualVendor