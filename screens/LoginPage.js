import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';
import CONFIG from '../config.json';
// store token
import Storage from '../utility/Storage';
// import { IOSCLIENTID, ANDROIDCLIENTID } from 'react-native-dotenv';

const LoginPage = ({navigation}) => {
    googleLogin(navigation);
    return null;
};

let IOSCLIENTID = CONFIG.IOSCLIENTID;
let ANDROIDCLIENTID = CONFIG.ANDROIDCLIENTID;

async function googleLogin(navigation) {
    // wait for access token from Expo's Google API
    const result = await Google.logInAsync({
        // iosClientId: process.env.IOSCLIENTID,
        // androidClientId: process.env.ANDROIDCLIENTID,
        iosClientId: IOSCLIENTID,
        androidClientId: ANDROIDCLIENTID,
    });

    if (result.type === 'success') {
        let storage = new Storage();

        await storage.add("googleId", result.idToken);
        await storage.add("name", result.user.name);
        await storage.add("email", result.user.email);
        await storage.retrieve("googleId");
        await storage.retrieve("name");
        await storage.retrieve("email");

        await passTokenToBackend(result);
        console.log(result.idToken);
        navigation.navigate('Home', {"name": result.user.name, "email": result.user.email})
    }
}

async function passTokenToBackend(result) {
    axios.get('http://localhost:8080/test/user/login', {
        headers: {
            'Content-Type': 'application/json',
            'googleId': result.idToken,
        }
    }).then(function (response) {
        // log user in
    }).catch(function (error) {
        // send user back to login page and clear local storage
        console.log(error);
    })
}

export default LoginPage;