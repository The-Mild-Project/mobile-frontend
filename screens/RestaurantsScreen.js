import React, { useState } from 'react';
import { FlatList, Image, Platform, StyleSheet } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const RestaurantsScreen = ({navigation, route}) => {
    const [term, setTerm] = useState('');
    // returns an array
    const [searchApi, results] = useRestaurants();
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}/>
            <ResultsList navigation={navigation} results={results}/>
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
    },
    contentContainer: {
        paddingTop: 30,
    }
});

export default RestaurantsScreen;