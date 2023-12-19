import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../utils/CommonButton'

const Accounts = ({ navigation }) => {
    return (
        <View>
            <View style={styles.flatlist}>
                <View style={styles.headingFlatlist}>
                    <Text style={styles.head}>Employees</Text>
                </View>
                <CustomButton
                    title={"All Employees"}
                    color={"#000"}
                    style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
                    handleOnPress={() => navigation.navigate("All Employees")}
                />
                <CustomButton
                    title={"Add Employees"}
                    color={"#000"}
                    style={{ width: "95%", borderRadius: 10, margin: 10, fontSize: 10 }}
                    handleOnPress={() => navigation.navigate("Add Employee")}
                />
            </View>
            <View style={styles.flatlist}>
                <View style={styles.headingFlatlist}>
                    <Text style={styles.head}>Profit & Loss</Text>
                </View>
            </View>
        </View>
    )
}

export default Accounts

const styles = StyleSheet.create({
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
    headingFlatlist: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: 10,
    },
    head: {
        fontSize: 20,
        fontWeight: 600,
    },
})