import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import ComonStyles from '../../utils/CommonCss'
import { Picker } from '@react-native-picker/picker';

const ShopRecords = () => {
    const [msgSendValue, setMsgSendValue] = useState("Send");
    return (
        <View style={styles.body}>
            <View style={[styles.row, styles.bgColor]}>
                <View style={styles.totalRevenue}>
                    <Text style={[styles.font20, styles.green]}>Rs.10,220,222</Text>
                    <Text>Total Revenue</Text>
                </View>
                <View style={styles.shopDebt}>
                    <Text style={[styles.font20, styles.red]}>Rs.57,400</Text>
                    <Text>Balance</Text>
                </View>
            </View>
            <View style={styles.records}>
                <View style={styles.chatContainer}>
                    <View style={[styles.chat, styles.sent]}>
                        <View>
                            <Text>I sent 100 peices of Gionee Handfree worth Rs.8,000</Text>
                        </View>
                    </View>

                    <View style={[styles.chat, styles.recieved]}>
                        <View>
                            <Text>I recieved Rs.20,000 on 12-10-22 for 800 pieces of Gionee Handfree</Text>
                        </View>
                    </View>

                    <View style={[styles.chat, styles.sent]}>
                        <View>
                            <Text>I sent 1200 peices of Gionee Handfree worth Rs.40,000</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.addRecords}>
                    <View style={styles.row}>
                        <TextInput
                            placeholder="Message"
                            style={ComonStyles.inputStyle2}
                            value={null}
                            inputMode="text"
                            // onChangeText={(newValue) => SetShopName(newValue)}
                            required
                        />
                        <View style={[styles.dropdown]}>
                            <Picker
                                selectedValue={msgSendValue}

                                onValueChange={(msgSendValue) => setMsgSendValue(msgSendValue)}
                            >
                                <Picker.Item label="Send" value="Send" />
                                <Picker.Item label="Recieve" value="Recieve" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.dropdown2]}>
                            <Picker
                                selectedValue={msgSendValue}

                                onValueChange={(msgSendValue) => setMsgSendValue(msgSendValue)}
                            >
                                <Picker.Item label="Gionee handsfree" value="Gionee handsfree" />
                                <Picker.Item label="Fast Powerbank" value="Fast Powerbank" />
                                <Picker.Item label="Vooc Cable" value="Vooc Cable" />
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ShopRecords

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bgColor: {
        height: 70,
        backgroundColor: "lightgrey",
        width: "100%"
    },
    font20: {
        fontSize: 20
    },
    red: {
        color: "red"
    },
    green: {
        color: "green"
    },
    chatContainer:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "flex-end",
        bottom: 150,
        width: "100%"
    },
    chat: {
        backgroundColor: "#fff",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        elevation: 20,
        shadowColor: "#777777bb",
    },
    sent: {
        borderColor: "red",
        borderWidth: 2,
        right: -5
    },
    recieved: {
        borderColor: "green",
        borderWidth: 2,
        left: "-5%"
    },
    dropdown: {
        borderWidth: 2,
        borderColor: "#000",
        width: "40%",
        color: "#000",
        borderColor: "#000",
        borderRadius: 10,
        height: 50,
        justifyContent: "center"
    },
    dropdown2: {
        borderWidth: 2,
        borderColor: "#000",
        width: "100%",
        color: "#000",
        borderColor: "#000",
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        marginVertical: 5
    },
    addRecords: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 5,
        backgroundColor: "lightgrey"
    },
    records:{
        flex: 1
    }

})