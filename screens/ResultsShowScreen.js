import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsShowScreen = ({navigation, route}) => {
    let name;
    if (route !== undefined) {
        name = route.params.name;
    }
    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    }
);

export default ResultsShowScreen;