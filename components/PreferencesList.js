import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'

const PreferencesList = ({title, results}) => {

    return (
        <View>
        <Text>{title}</Text>
        <FlatList
            data={results.food}
            renderItem={({item, index}) => {
                return (
                    <View style={styles.row}>
                        <Text style={styles.title}>{item} - {index}</Text>
                        <TouchableOpacity onPress={() => console.log(index)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                );
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
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
    }


});
export default PreferencesList;