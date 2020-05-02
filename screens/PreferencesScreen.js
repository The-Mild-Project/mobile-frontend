import React, { useState, useEffect } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import * as SecureStore from "expo-secure-store";
import preferences from "../api/preferences";
import PreferencesList from "../components/PreferencesList";


const PreferencesScreen =  ({navigation}) => {
    let [results, setResults] = useState([]);
    // get from async storage
    const retrieveItem = async (key) => {
        try {
            const retrievedItem = await SecureStore.getItemAsync(key);
            console.log('item', retrievedItem);
            return retrievedItem;
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        retrieveItem("googleId").then(async (googleId) => {
            try {
                const response = await preferences.get('', {
                    headers: {
                        googleId: googleId
                    }
                });
                setResults(response.data);
            } catch (err) {
                console.log("Error:", err);
            }
        });
    }, []);


    // so we can filter by type of food later

    return (

        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.name}>Preferences</Text>
                <PreferencesList navigation={navigation} results={results}/>
            </View>
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

export default PreferencesScreen;