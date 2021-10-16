import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FavouriteScreen = ({navigation}) => {
    return (
        <View style={ styles.container }>
            <Text>Favourite</Text>
        </View>
    );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
});