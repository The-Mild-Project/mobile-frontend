import * as React from 'react';
import * as Google from 'expo-google-app-auth';
import axios from 'axios';
//import CONFIG from '../config.json';
// store token
import instance from '../utility/Storage';

const LoginScreen = ({navigation}) => {
    googleLogin(navigation);
    return null;
};

// let IOSCLIENTID = CONFIG.IOSCLIENTID;
// let ANDROIDCLIENTID = CONFIG.ANDROIDCLIENTID;

async function googleLogin(navigation) {
    // wait for access token from Expo's Google API
    const result = await Google.logInAsync({
        iosClientId: process.env.IOSCLIENTID,
        androidClientId: process.env.ANDROIDCLIENTID,
        // iosClientId: IOSCLIENTID,
        // androidClientId: ANDROIDCLIENTID,
    });

    if (result.type === 'success') {
        await instance.add("googleId", result.idToken);
        await instance.add("name", result.user.name);
        await instance.add("email", result.user.email);
        await passTokenToBackend(result);

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

export default LoginScreen;