import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={ styles.container }>
            <Text>Profile</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
});