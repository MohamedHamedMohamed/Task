import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeStackScreen, CategoriesStackScreen, FavouriteStackScreen, ProfileStackScreen} from './CustomNavigation';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false, showIcon: true, style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 25,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: 'white',
            elevation: 0
        },
         }}>
            <Tab.Screen name="HomeScreen" component={HomeStackScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabsStyle}>
                            <Ionicons name="home-outline" size={30} style={{ color: focused ? '#705289' : '#a6a6a6'}} />
                            <Text style={{ color: focused ? '#705289' : '#a6a6a6', fontSize: 12 }}>Home</Text>
                        </View>
                    ),
                }}
            >
            </Tab.Screen>
            <Tab.Screen name="CategoriesScreen" component={CategoriesStackScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabsStyle}>
                            <Ionicons name="grid" size={30} style={{ color: focused ? '#705289' : '#a6a6a6'}} />
                            <Text style={{ color: focused ? '#705289' : '#a6a6a6', fontSize: 12 }}>Catalogue</Text>
                        </View>
                    ),
                }}
            >
            </Tab.Screen>
            <Tab.Screen name="FavouriteScreen" component={FavouriteStackScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabsStyle}>
                            <Ionicons name="heart-outline" size={30} style={{ color: focused ? '#705289' : '#a6a6a6'}} />
                            <Text style={{ color: focused ? '#705289' : '#a6a6a6', fontSize: 12 }}>Favourite</Text>
                        </View>
                    ),
                }}
            >
            </Tab.Screen>
            <Tab.Screen name="ProfileScreen" component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.tabsStyle}>
                            <Ionicons name="person-outline" size={30} style={{ color: focused ? '#705289' : '#a6a6a6'}} />
                            <Text style={{ color: focused ? '#705289' : '#a6a6a6', fontSize: 12 }}>Profile</Text>
                        </View>
                    ),
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabsStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Tabs;