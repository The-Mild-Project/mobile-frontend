import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1
    },
    loginHeader: {
        fontSize: 28,
        fontWeight: "300",
        marginBottom: 40
    }
});