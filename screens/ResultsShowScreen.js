import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsShowScreen = ({navigation, route}) => {
    const name = route.params.name
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