import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, ScrollView, FlatList, Image, Dimensions, TouchableOpacity, NavLink, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CategoriesScreen = ({navigation}) => {
    const [dataCat, setData] = useState([]);
    const [dataItemsTemp, setItemsDataTemp] = useState([]);
    const [dataFavourite, setdataFavourite] = useState([]);
    const [dataItems, setItemsData] = useState([]);
    const [ isPress, setIsPress ] = useState("All");

    const fetchData = async () => {
        const resp = await fetch("https://fakestoreapi.com/products/categories");
        const data = await resp.json();
        setData(data);
    };
    const fetchDataItems = async () => {
        const respItems = await fetch("https://fakestoreapi.com/products");
        const dataItems = await respItems.json();
        setItemsData(dataItems);
        setItemsDataTemp(dataItems);
    };
    useEffect(() => {
        fetchData();
        fetchDataItems();
    }, []);

    function filterItems(Cat) {
        if(Cat == "All"){
            setItemsData(dataItemsTemp);
        }else{
            setItemsData(dataItemsTemp.filter(data => data.category == Cat));
        }
        setIsPress(Cat);
    };

    function AddingFavouriteItem(ItemData){
        let filtereddata = dataFavourite.filter(data => data.id == ItemData.id);
        if(filtereddata.length > 0){
            return (Alert.alert(
                "Warning",
                "You added this item before"
              ));
        } else{
            dataFavourite.push(ItemData);
            setdataFavourite(dataFavourite);
            return (Alert.alert(
                "Success",
                "Your item has been added successfully"
              ));
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.containerItems}>
                <TouchableOpacity style={styles.btnHeart} onPress={ AddingFavouriteItem.bind(this, item)}>
                    <Ionicons name="heart-outline" size={20} style={{ color: '#705289' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate('ProductDetailsScreen', item )}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageItem} source={{ uri: item.image}} />
                    </View>
                    <View style={styles.titleItemView}>
                        <Text numberOfLines={2} style={styles.titleItemText}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.priceItemText}>${item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    };
    return (
        <View style={ styles.container }>
            <ScrollView>
                <View style={ styles.containerScrollView }>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <TouchableOpacity style={[styles.Cat, isPress == "All" ? styles.btnPress : styles.btnNormal]} onPress={ filterItems.bind(this, "All")}>
                            <Text style={[styles.textCat, isPress == "All" ? styles.txtPress : styles.txtNormal]}>All</Text>
                        </TouchableOpacity>
                        {dataCat.map((item, index) => (
                            <TouchableOpacity style={[styles.Cat, isPress == item ? styles.btnPress : styles.btnNormal]} key={index} onPress={ filterItems.bind(this, item) }>
                                <Text style={[styles.textCat, isPress == item ? styles.txtPress : styles.txtNormal]}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View>
                    <Text style={styles.textLength}>{ dataItems.length } items</Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.containerListItems}
                    data={dataItems}
                    renderItem={renderItem}
                    keyExtractor={items => items.id.toString()}
                />
            </ScrollView>
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f3f4',
    },
    scrollView: {
        height: 100,
    },
    containerScrollView: {
        height: 65,
    },
    Cat: {
        padding: 17,
        height: 35,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
    },
    catActive: {
        backgroundColor: '#e7b944',
    },
    textLength: {
        marginLeft: 10,
        color: "#574d5f",
        fontSize: 14,
        fontWeight: 'bold',
    },
    containerListItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerItems: {
        width: (windowWidth / 2) - 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
    },
    imageContainer: {
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    imageItem: {
        resizeMode: "contain",
        width: '80%',
        height: 200,
    },
    titleItemText: {
        color: '#8a838f',
        fontSize: 14,
    },
    priceItemText: {
        marginTop: 10,
        color: '#574d5f',
        fontSize: 14,
        fontWeight: '700',
        width: '100%',
    },
    btnHeart: {
        position: 'absolute',
        top: 175,
        backgroundColor: 'white',
        height: 40,
        width: 40,
        borderRadius: 20,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        zIndex: 100,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    textCat: {
        textAlign: 'center',
        fontSize: 12,
    },
    btnPress: {
        backgroundColor: '#e7b944',
    },
    txtPress: {
        color: 'white',
    },
    btnNormal: {
        backgroundColor: 'white',
    },
    txtNormal: {
        color: '#705289',
    }
});