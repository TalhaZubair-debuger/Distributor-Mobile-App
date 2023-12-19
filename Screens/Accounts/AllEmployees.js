import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import ComonStyles from '../../utils/CommonCss'
import EmployeeList from '../../utils/EmployeeList'

const AllEmployees = () => {
    const [data, setData] = useState("");
    return (
        <View>
            <View style={styles.flatlist}>
                <View style={styles.headingFlatlist}>
                    <Text style={styles.head}>All Employees</Text>
                </View>

                {
                    data ?
                        <SafeAreaView>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <EmployeeList
                                    employeeName={item.emaployeeName}
                                    employeeDesignation={item.employeeDesignation}
                                    navigation={navigation} />}
                                keyExtractor={item => item._id}
                            />
                        </SafeAreaView>
                        :
                        <Text style={ComonStyles.notFound}>No Employees Found</Text>
                }

            </View>
        </View>
    )
}

export default AllEmployees

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