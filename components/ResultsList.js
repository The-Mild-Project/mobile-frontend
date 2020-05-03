import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results, navigation}) => {
    return <View>
        <Text>{title}</Text>
        <FlatList
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {name: item.name})}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
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
export default ResultsList;