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
    const { type, accessToken, user } = await Google.logInAsync({
        iosClientId: CONFIG.IOSCLIENTID,
        androidClientId: CONFIG.ANDROIDCLIENTID,
        //iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
        //androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
    });

    if (type === 'success') {
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        // store token
        console.log(typeof(accessToken))
        AsyncStorage.setItem('tokenId', accessToken, () => {
            AsyncStorage.mergeItem('tokenId', accessToken, () => {
                AsyncStorage.getItem('tokenId', (err, result) => {
                    console.log(result);
                });
            });
        });

        AsyncStorage.setItem('name', user.name, () => {
            AsyncStorage.mergeItem('name', user.name, () => {
                AsyncStorage.getItem('name', (err, result) => {
                    console.log(result);
                });
            });
        });
        console.log(user);
        //console.log(accessToken);
        navigation.navigate('LoggedInScreen', {"name": user.name})
        //return accessToken;
    }
}




const responseGoogle = (response) => {
    console.log(response);

};

const MyLoginPage = ({ theme }) => {

};

export default LoginPage;