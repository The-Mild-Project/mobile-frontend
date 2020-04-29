import React, { useState } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

// TODO: Add Searchbar, add term to search
const RestaurantsScreen = () => {
    const [term, setTerm] = useState('');
    // returns an array
    const [searchApi, results] = useRestaurants();


    // so we can filter by type of food later
    const filterResultsByType = (genre) => {
        return results.filter(result => {
            return result.genre === genre;
        })
    };


    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text>Restaurants</Text>
                <Text>Search Will Go Here</Text>
            </View>
            <ResultsList title="First" results={results}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default RestaurantsScreen;