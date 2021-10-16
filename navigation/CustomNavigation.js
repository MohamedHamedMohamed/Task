import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator()

const HomeStackScreen = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#705289',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
          }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}
export {HomeStackScreen}

const CategoriesStackScreen = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#705289',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
          }}>
            <Stack.Screen
                name="Categories"
                component={CategoriesScreen}
            />
            <Stack.Screen options={{ title: '', }}
                name="ProductDetailsScreen"
                component={ProductDetailsScreen}
            />
        </Stack.Navigator>
    )
}
export {CategoriesStackScreen}

const FavouriteStackScreen = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#705289',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
          }}>
            <Stack.Screen
                name="Favourite"
                component={FavouriteScreen}
            />
        </Stack.Navigator>
    )
}
export {FavouriteStackScreen}

const ProfileStackScreen = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#705289',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
          }}>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}
export {ProfileStackScreen}