import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>

            <TextInput
                autoCapitalize="none"
                autoCorrect={true}
                style={styles.inputStyle}
                placeholder="Search Food"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#fefefe",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        borderColor: '#fefefe',
        borderWidth: 1,
        flex: 1,
        fontSize: 18,
        marginHorizontal: 15
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;