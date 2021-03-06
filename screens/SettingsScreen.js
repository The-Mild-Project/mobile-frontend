import React, { useState } from 'react';
import { FlatList, Image, Platform, StyleSheet, View, Text, Button } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import instance from '../utility/Storage';

const SettingsScreen = ({route, navigation}) => {
    const [term, setTerm] = useState('');
    let name;
    let email;
    if (route !== undefined ) {
        name = route.params.name;
        email = route.params.email;
    }



    const logout = () => {
        // remove from storage and redirect to login
        instance.remove("googleId").then(() => {
            navigation.navigate('Welcome')
        })
    }

    return (

        <View style={styles.container}>
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.name}>Email: {email}</Text>
            <Button title="Logout" onPress={() => logout()} />
        </View>
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

export default SettingsScreen;