import React, { useState } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const RestaurantsScreen = (props) => {
    console.log(props)
    const [term, setTerm] = useState('');
    // returns an array
    const [searchApi, results] = useRestaurants();

    // so we can filter by type of food later



    return (

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
            <View style={styles.container}>
                <Text style={styles.name}>Restaurants</Text>
            </View>
            <ResultsList results={results}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default RestaurantsScreen;