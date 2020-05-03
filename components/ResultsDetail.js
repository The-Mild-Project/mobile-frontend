import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {result.name}</Text>
            <Image style={styles.image} source={{ uri: result.image_url }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: 315,
        height: 120,
        borderRadius: 4,
        marginTop: 2,
        marginBottom: 10
    }
});

export default ResultsDetail;