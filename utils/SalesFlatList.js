import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SalesFlatList = ({ title, totalItems }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.purchase}> <Text style={styles.color}>
            {totalItems >= 10000 ? '🟢':'🔴'}    
            </Text> {totalItems}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        boxShadow: '5px 5px #777777bb',
        backgroundColor: '#dddddd55',
        marginBottom: 5,
        height: 60
    },
    title: {
        fontSize: 20,
        flex: 1,
        justifyContent: 'center',
        textAlign: 'left',
        maxWidth: 150,
        borderRightColor: '#aaa',
        borderRightWidth: 2,
        marginLeft: 5 
    },
    purchase: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'right',
        marginRight: 5
    },
    color: {
        fontSize: 20,
        color: '#00FF00'
    }
})
export default SalesFlatList