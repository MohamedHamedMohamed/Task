import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={ styles.container }>
            <Text>Home</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
});