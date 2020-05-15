import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import {ScrollView} from "react-native-gesture-handler";
import preferences from "../api/preferences";
import instance from '../utility/Storage';


const CreatePreferenceScreen =  ({route, navigation}) => {
    let [results, setResults] = useState([]);
    let [food, setFood] = useState([]);
    let [preference, setPreference] = useState("");
    // get from localstorage

    // the callback argument makes it so it will respond correctly to the call being made within the screen
    function addItem (item, callback) {
        const newFood = results.food.concat(item);
        let newState = {"food": newFood};
        setResults(newState);
        setFood(newFood);
        let jsonFood = JSON.stringify(newFood);
        instance.retrieve("googleId").then(async (googleId) => {
            try {
                await preferences.post('/set',
                    jsonFood
                    , {
                        headers: {
                            googleId: googleId
                        },
                    });
                await instance.add("preference", item);
                callback();
            } catch (err) {
                console.log("Error:", err);
            }
        });
    }

    /* this will execute only once on screen load */
    useEffect(() => {
        instance.retrieve("googleId").then(async (googleId) => {
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
        if (route !== undefined) {
            setResults(route.params.results);
            setFood(route.params.results.food);
        }
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
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
                    <Button title="Submit" onPress={() => {
                        addItem(preference, () => {
                            navigation.navigate('Preferences');
                        });
                    }}/>
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