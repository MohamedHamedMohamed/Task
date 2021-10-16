import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.gloabalText }>{ route.params.description }</Text>
            <Text style={[ styles.gloabalText, styles.priceStyle ]}>${ route.params.price }</Text>
        </View>
    );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f3f4',
    },
    gloabalText: {
        color: "#574d5f",
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
        marginRight: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    priceStyle: {
        color: '#574d5f',
    },
});