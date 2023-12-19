import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import ComonStyles from '../../utils/CommonCss';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '../../utils/CommonButton';

const AddEmployees = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeContact, setEmployeeContact] = useState(null);
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");
    const [employeeType, setEmployeeType] = useState("KPO");
    const [area, setArea] = useState("");

    const handleSubmitAddEmployee = async () => {
        
    }
    return (
        <View>
            <View style={styles.flatlist}>
                <View style={styles.headingFlatlist}>
                    <Text style={styles.head}>Add Employees</Text>
                </View>

                <View style={styles.background}>
                    <TextInput
                        placeholder="Employee Name"
                        style={ComonStyles.inputStyle1}
                        value={employeeName}
                        inputMode="text"
                        onChangeText={(newValue) => setEmployeeName(newValue)}
                        required
                    />

                    <TextInput
                        placeholder="Employee Contact"
                        style={ComonStyles.inputStyle1}
                        value={employeeContact}
                        inputMode="numeric"
                        onChangeText={(newValue) => setEmployeeContact(newValue)}
                        required
                    />

                    <TextInput
                        placeholder="Employee Email"
                        style={ComonStyles.inputStyle1}
                        value={employeeEmail}
                        inputMode="text"
                        onChangeText={(newValue) => setEmployeeEmail(newValue)}
                        required
                    />

                    <TextInput
                        placeholder="Employee Password"
                        style={ComonStyles.inputStyle1}
                        value={employeePassword}
                        inputMode="text"
                        onChangeText={(newValue) => setEmployeePassword(newValue)}
                        required
                    />

                    <View>
                        <Text>
                            Employee Designation
                        </Text>
                    </View>
                    <View style={[styles.dropdown2]}>
                        <Picker
                            selectedValue={employeeType}
                            onValueChange={(value) => setEmployeeType(value)}
                        >
                            <Picker.Item label="KPO" value="KPO" />
                            <Picker.Item label="Salesman" value="Salesman" />
                        </Picker>
                    </View>

                    {
                        employeeType === "Salesman" ?
                            <>
                                <View>
                                    <Text>
                                        Salesman Area
                                    </Text>
                                </View>
                                <View style={[styles.dropdown2]}>
                                    <Picker
                                        selectedValue={area}
                                        onValueChange={(value) => setArea(value)}
                                    >
                                        <Picker.Item label="chungg" value="chungg" />
                                        <Picker.Item label="thokar" value="thokar" />
                                    </Picker>
                                </View>
                            </>
                            :
                            <></>
                    }

                    <CustomButton
                        title={"Add Employee"}
                        color={"#000"}
                        style={{ width: "80%", borderRadius: 10, margin: 10, fontSize: 10 }}
                        handleOnPress={handleSubmitAddEmployee}
                    />

                </View>
            </View>
        </View>
    )
}

export default AddEmployees

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
    background: {
        width: "100%",
        marginTop: 10,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    dropdown2: {
        borderWidth: 2,
        borderColor: "#000",
        width: "80%",
        color: "#000",
        borderColor: "#000",
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        marginVertical: 5
    },
})