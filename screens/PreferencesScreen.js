import React, { useState, useEffect } from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import preferences from "../api/preferences";
import { Button } from 'react-native-elements';
import {Feather} from "@expo/vector-icons";
import Storage from '../utility/Storage'


const PreferencesScreen =  ({navigation}) => {
    let [results, setResults] = useState([]);
    let [food, setFood] = useState([]);
    // get from localstorage
    let storage = new Storage();

    function deleteItem (item) {
        // filter out the toRemove food
        let newFood = results.food.filter(toRemove => item !== toRemove);
        let newState = {"food": newFood};
        setResults(newState);
        setFood(newFood);
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

    return (

        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.name}>Food Preferences</Text>
                    <FlatList
                        data={results.food}
                        renderItem={({item, index}) => {
                            return (
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item}</Text>
                                    <TouchableOpacity onPress={() => deleteItem(item, index)}>
                                        <Feather style={styles.icon} name="trash" />
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                <Button title="Add a Preference" onPress={() => navigation.navigate('Create Preference', {"results": results})} />
            </View>
        </ScrollView>
    )
};

PreferencesScreen.navigationOptions = () => {
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

export default PreferencesScreen;