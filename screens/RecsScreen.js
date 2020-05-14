import React, { useState, useEffect } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";
import recs from "../api/recs";
import { Button } from 'react-native-elements';
import {Feather} from "@expo/vector-icons";
import useRecs from "../hooks/useRecs";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";


const RecsScreen =  ({navigation}) => {
    const [term, setTerm] = useState('');
    // returns an array
    const [searchApi, results] = useRecs();
    console.log("RESULTS");
    console.log(results);
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <ResultsList navigation={navigation} results={results}/>
        </ScrollView>
    );





    /* this will execute only once on screen load */
    // useEffect(() => {
    //     retrieveItem("googleId").then(async (googleId) => {
    //         try {
    //             const response = await recs.get('/get', {
    //                 headers: {
    //                     googleId: googleId
    //                 }
    //             });
    //             setResults(response.data);
    //         } catch (err) {
    //             console.log("Error:", err);
    //         }
    //     });
    // }, []);


};

RecsScreen.navigationOptions = () => {
    return {
        headerRight: <Feather name="plus" size={30} />
    };
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
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    icon: {
        fontSize: 24,
    },
    contentContainer: {
        paddingTop: 30,
    }
});

export default RecsScreen;