import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import CONFIG from '../config.json';

function LoginPage({ navigation }) {
    googleLogin()
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    );
}
async function googleLogin() {
    // wait for access token from Expo's Google API
    const { type, accessToken, user } = await Google.logInAsync({
        iosClientId: CONFIG.IOSCLIENTID,
        androidClientId: CONFIG.ANDROIDCLIENTID,
        //iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
        //androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
    });

    if (type === 'success') {
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        console.log(user);
    }
}




const responseGoogle = (response) => {
    console.log(response);

};

const MyLoginPage = ({ theme }) => {

};

export default LoginPage;