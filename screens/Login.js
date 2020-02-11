import React, { Component } from "react";
import * as Google from 'expo-google-app-auth';
import {IOSCLIENTID, ANDROIDCLIENTID} from '../config.json';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from "../styles/styles"

import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
} from "react-native";

async function signInWithGoogleAsync() {
    try {
        const result = await Google.logInAsync({
            androidClientId: ANDROIDCLIENTID,
            iosClientId: IOSCLIENTID,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            return result.accessToken;
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        return { error: true };
    }
}

export default function Login({ navigation }) {

        return (
            <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login With Google</Text>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
}