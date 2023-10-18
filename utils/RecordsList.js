import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecordsList = ({ entryMessage, entryDate, sent, recieved }) => {
    return (
        <View style={styles.item}>
            <View style={styles.entry}>
                <Text>
                    {entryMessage}
                </Text>
                <Text>
                    {entryDate}
                </Text>
            </View>
            <View style={styles.sent}>
                <Text>
                    {sent ? sent : " "}
                </Text>
            </View>
            <View style={styles.recieved}>
                <Text>
                    {recieved ? recieved : " "}
                </Text>
            </View>
        </View>
    )
}

export default RecordsList

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        backgroundColor: "lightgrey",
        borderBottomColor: "#000",
        borderBottomWidth: 2,
        width: "100%",
        height: 80,
    },
    entry: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 5,
        width: "40%"
    },
    sent: {
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 5,
        width: "30%",
        backgroundColor: "#CD1818",
        height: "100%"
    },
    recieved: {
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 5,
        width: "30%",
        backgroundColor: "#116D6E",
        height: "100%"
    }
})