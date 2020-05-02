import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import axios from 'axios'
import CONFIG from '../config.json';
import * as SecureStore from 'expo-secure-store';
// store token

const LoginPage = ({navigation}) => {
    googleLogin(navigation);
    return null;
};


async function googleLogin(navigation) {
    // wait for access token from Expo's Google API
    const result = await Google.logInAsync({
        iosClientId: CONFIG.IOSCLIENTID,
        androidClientId: CONFIG.ANDROIDCLIENTID
    });

    if (result.type === 'success') {
        // let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        //     headers: { Authorization: `Bearer ${result.accessToken}`},
        // });
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        // store token

        const retrieveItem = async (key) => {
            try {
                const retrievedItem = await SecureStore.getItemAsync(key);
                console.log('item', retrievedItem);
            } catch (error) {
                console.log(error.message);
            }
        };

        const setItem = async (key, value) => {
            try {
                await SecureStore.setItemAsync(key, value);
            } catch(e) {
                console.log(e);
            }
        };

        await setItem("googleId", result.idToken);
        await setItem("name", result.user.name);
        await setItem("email", result.user.email);

        await retrieveItem("googleId");
        await retrieveItem("name");
        await retrieveItem("email");

        await passTokenToBackend(result);
        navigation.navigate('LoggedInScreen', {"name": result.user.name, "email": result.user.email})
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
        console.log(response)
    }).catch(function (error) {
        // send user back to login page and clear local storage
        console.log(error);
    })
}




const responseGoogle = (response) => {
    console.log(response);

};

const MyLoginPage = ({ theme }) => {

};

export default LoginPage;