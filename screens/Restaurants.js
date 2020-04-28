import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import CONFIG from '../config.json';

// store token

function PlacesPage({ navigation }) {
    passTokenToBackend()
}

async function asyncGetDataHelper(key) {
    return await AsyncStorage.getItem(key);
}


async function getRestaurantFromBackend(result) {
    try {
        let response = await fetch('https://foodapp-user-service.herokuapp.com/test/user/login', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'googleId': result.accessToken
            }
        });
        console.log("response")
        console.log(JSON.stringify(response))
        if (response.status === 415) {
            return;
        }
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}




const responseGoogle = (response) => {
    console.log(response);

};

const MyLoginPage = ({ theme }) => {

};

export default LoginPage;