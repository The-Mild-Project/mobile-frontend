import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const PreferencesList = ({title, results, navigation}) => {
    return <View>
        <Text>{title}</Text>
        <FlatList
            data={results}
            keyExtractor={(result) => result}
            renderItem={(item) => {
                return (
                    <Text>{item}</Text>
                );
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});
export default PreferencesList;