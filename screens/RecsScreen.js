import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import { Button } from 'react-native-elements';
import {ScrollView} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import useRecs from "../hooks/useRecs";
import ResultsList from "../components/ResultsList";


const RecsScreen =  ({navigation}) => {
    // returns an array
    const [loc, setLoc] = useState('94122');
    const [searchApi, results] = useRecs();
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.backgroundStyle}>
                <TextInput style={styles.inputStyle} placeholder="Location" onChangeText={setLoc} />
                <Button title="Submit" onPress={() => searchApi(loc)}/>
            </View>
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
    },
    inputStyle: {
        borderColor: '#fefefe',
        borderWidth: 1,
        flex: 1,
        fontSize: 18,
        marginHorizontal: 15
    },
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#fefefe",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default RecsScreen;