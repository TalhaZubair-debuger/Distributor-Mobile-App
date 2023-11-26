import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login/Login";
import SignUp from "./Screens/SignUp/SignUp";
import Sales from "./Screens/Sales/Sales";
import Finance from "./Screens/Vendors/Vendor";
import Shop from "./Screens/Shops/Shop";
import AllShops from "./Screens/Shops/AllShops";
import AddShop from "./Screens/Shops/AddShop";
import Warehouse from "./Screens/Warehouse/Warehouse";
import ManageShops from "./Screens/Shops/ManageShops";
import IndividualShop from "./Screens/Shops/IndividualShop";
import ReOrderProducts from "./Screens/Vendors/ReOrder Products";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import AllVendors from "./Screens/Vendors/AllVendors";
import AddStocks from "./Screens/Warehouse/AddStocks";
import RemoveStocks from "./Screens/Warehouse/RemoveStocks";
import Stock from "./Screens/Warehouse/Stock";
import AllShop from "./Screens/Vendors/AllShop";
import Vendors from "./Screens/Vendors/Vendor";
import IndividualVendor from "./Screens/Vendors/IndividualVendor";
import AddArea from "./Screens/Shops/AddArea";
import ShopRecords from "./Screens/Shops/ShopRecords";
import EditShop from "./Screens/Shops/EditShop";
import VendorRecords from "./Screens/Vendors/VendorRecords";

const Drawer = createDrawerNavigator();
function ShopTab() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerActiveTintColor: "#000",
        drawerActiveBackgroundColor: "#66666622",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: 600,
        },
        drawerType: "front",
        drawerContentStyle: {
          backgroundColor: "#66666633",
          height: "100%",
        },
      })}
    >
      <Drawer.Screen name={"Shop"} component={Shop} />
      <Drawer.Screen name={"All Shops"} component={AllShops} />
      <Drawer.Screen name={"Add Shop"} component={AddShop} />
      <Drawer.Screen name={"Manage Shops"} component={ManageShops} />
      <Drawer.Screen name={"Add Area"} component={AddArea} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Sales") {
            iconName = "chart-bar";
            size = focused ? 25 : 20;
          } else if (route.name === "Vendors") {
            iconName = "store-alt";
            size = focused ? 25 : 20;
          } else if (route.name === "Shops") {
            iconName = "sitemap";
            size = focused ? 25 : 20;
          } else if (route.name === "Warehouse") {
            iconName = "warehouse";
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#666",
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold" },
        tabBarStyle: {
          display: "flex",
          backgroundColor: "#fff",
          height: 50,
          borderRadius: 10,
          margin: 5,
          boxShadow: "5px 5px",
        },
      })}
    >
      <Tab.Screen name={"Sales"} component={Sales} />
      <Tab.Screen name={"Vendors"} component={Finance} />
      <Tab.Screen
        name={"Shops"}
        component={ShopTab}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={"Warehouse"} component={Warehouse} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="AllShops" component={AllShop} />
        <RootStack.Screen name="Vendors" component={Vendors} />
        <RootStack.Screen name="Individual Shop" component={IndividualShop} />
        <RootStack.Screen name="ReOrder Products" component={ReOrderProducts} />
        <RootStack.Screen name="All Vendors" component={AllVendors} />
        <RootStack.Screen name="AddStocks" component={AddStocks} />
        <RootStack.Screen name="ManageStocks" component={RemoveStocks} />
        <RootStack.Screen name="Shop Records" component={ShopRecords} />
        <RootStack.Screen name="Vendor Records" component={VendorRecords} />
        <RootStack.Screen name="Edit Shop" component={EditShop} />
        <RootStack.Screen name="Individual Vendor" component={IndividualVendor} />
        <RootStack.Screen name="Stock" component={Stock} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
