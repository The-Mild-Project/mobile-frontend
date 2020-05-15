import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const RestaurantsScreen = ({navigation, route}) => {
    const [term, setTerm] = useState('');
    const [loc, setLoc] = useState('94122');
    /* updates State by calling the useRestaurants Hook */
    const [searchApi, results] = useRestaurants();

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term, loc)}/>
            <View style={styles.backgroundStyle}>
                <TextInput style={styles.inputStyle} placeholder="Location" onChangeText={setLoc} />
            </View>
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
    },
    inputStyle: {
        borderColor: '#fefefe',
        borderWidth: 1,
        flex: 1,
        fontSize: 18,
        marginHorizontal: 15
    },
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#fefefe",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },

});

export default RestaurantsScreen;