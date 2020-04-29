import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import CONFIG from '../config.json';

// store token

function LoginPage({ navigation }) {
    googleLogin(navigation);
    return null;
}

async function asyncGetDataHelper(key) {
    return await AsyncStorage.getItem(key);
}

async function googleLogin(navigation) {
    // wait for access token from Expo's Google API
    const result = await Google.logInAsync({
        iosClientId: CONFIG.IOSCLIENTID,
        androidClientId: CONFIG.ANDROIDCLIENTID
    });

    if (result.type === 'success') {
        let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${result.accessToken}`},
        });
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        // store token
        console.log(typeof(result.accessToken))
        AsyncStorage.setItem('tokenId', result.accessToken, () => {
            AsyncStorage.mergeItem('tokenId', result.accessToken, () => {
                AsyncStorage.getItem('tokenId', (err, result) => {
                    console.log(result);
                });
            });
        });

        AsyncStorage.setItem('name', result.user.name, () => {
            AsyncStorage.mergeItem('name', result.user.name, () => {
                AsyncStorage.getItem('name', (err, result) => {
                    console.log(result);
                });
            });
        });
        console.log(result.user);
        console.log(typeof(result.user));
        //console.log(accessToken);
        // send a request to the database to check if user exists
        console.log(result.user.id);
        console.log(typeof(result.user.id));
        await passTokenToBackend(result);
        navigation.navigate('LoggedInScreen', {"name": result.user.name})
        //return accessToken;
    }
}

async function passTokenToBackend(result) {
    try {
        let response = await fetch('https://foodapp-user-service.herokuapp.com/test/user/login', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'googleId': result.accessToken
            }
        });
        console.log("repsonse");
        console.log(JSON.stringify(response));
        if (response.status === 415) {
            return;
        }
        let responseJson = await response.json();
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