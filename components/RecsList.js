import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";

const RecsList = ({title, results}) => {
    console.log("in component");
    console.log(results);
    return <View>
        <Text>{title}</Text>
        <FlatList
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return <ResultsDetail result={item} />
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
export default RecsList;