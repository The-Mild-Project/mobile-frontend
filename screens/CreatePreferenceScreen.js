import React, { useState, useEffect } from 'react';
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import {ScrollView} from "react-native-gesture-handler";
import preferences from "../api/preferences";
import Storage from '../utility/Storage';


const CreatePreferenceScreen =  ({route, navigation}) => {
    let [results, setResults] = useState([route.params.results]);
    let [food, setFood] = useState([route.params.results.food]);
    let [preference, setPreference] = useState("");
    // get from localstorage
    let storage = new Storage();

    function addItem (item) {

        const newFood = results.food.concat(item);
        let newState = {"food": newFood};
        setResults(newState);
        setFood(newFood);
        console.log(newFood);
        let jsonFood = JSON.stringify(newFood);
        storage.retrieve("googleId").then(async (googleId) => {
            try {
                const response = await preferences.post('/set',
                    jsonFood
                    , {
                        headers: {
                            googleId: googleId
                        },
                    });
            } catch (err) {
                console.log("Error:", err);
            }
        });
        storage.add("preference", item);
    }

    /* this will execute only once on screen load */
    useEffect(() => {
        storage.retrieve("googleId").then(async (googleId) => {
            try {
                const response = await preferences.get('/get', {
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
                <FlatList
                    data={results.food}
                    renderItem={({item, index}) => {
                        return (
                            <View style={styles.row}>
                                <Text style={styles.title}>{item}</Text>
                            </View>
                        );
                    }}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>Enter Preference</Text>
                    <TextInput style={styles.input} value={preference} onChangeText={text => setPreference(text)}/>
                    <Button title="Submit" onPress={() => addItem(preference)} />
                </View>

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
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    contentContainer: {
        paddingTop: 30,
    }
});

export default CreatePreferenceScreen;