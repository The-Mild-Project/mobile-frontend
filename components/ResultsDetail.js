import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import {Feather} from "@expo/vector-icons";

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {result.name}</Text>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <View style={styles.row}>
                <Feather style={styles.icon} name="star" color="gold" />
                <Text style={styles.rating}> {result.rating}</Text>
            </View>
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
    rating: {
        fontSize: 16,
        marginBottom: 10
    },
    image: {
        width: 315,
        height: 120,
        borderRadius: 4,
        marginTop: 2
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    icon: {
        fontSize: 18,
    }
});

export default ResultsDetail;