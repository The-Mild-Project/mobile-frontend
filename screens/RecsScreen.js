import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import useRecs from "../hooks/useRecs";
import ResultsList from "../components/ResultsList";


const RecsScreen =  ({navigation}) => {
    // returns an array
    const [results] = useRecs();
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <ResultsList navigation={navigation} results={results}/>
        </ScrollView>
    );
};

RecsScreen.navigationOptions = () => {
    return {
        headerRight: <Feather name="plus" size={30} />
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    icon: {
        fontSize: 24,
    },
    contentContainer: {
        paddingTop: 30,
    }
});

export default RecsScreen;