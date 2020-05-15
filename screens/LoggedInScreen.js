import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

function LoggedInScreen({route, navigation}) {
    let name;
    let email;

    if (route !== undefined ) {
        name = route.params.name;
        email = route.params.email;
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text>Hi {name}, welcome to the Food App</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.smallCenterButton} title="Search Restaurants" onPress={() => navigation.navigate('Restaurants', {"name": name, "email": email})} />
                    <Button style={styles.smallCenterButton} title="View Recommendations" onPress={() => navigation.navigate('Recs', {"name": name, "email": email})} />
                    <Button style={styles.smallCenterButton} title="Preferences" onPress={() => navigation.navigate('Preferences', {"name": name, "email": email})} />
                    <Button style={styles.smallCenterButton} title="Settings" onPress={() => navigation.navigate('Settings', {"name": name, "email": email})} />
                </View>
            </View>
        </ScrollView>
    );
}

LoggedInScreen.navigationOptions = ( {navigation} ) => {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15
    },

    contentContainer: {
        paddingTop: 30,
    },

    smallCenterButton: {
        width: 300,
        height: 40,
        borderRadius: 4,
        marginBottom: 5,
        textAlign: 'center'
    },

    buttonContainer: {
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'black',
    }
});

export default LoggedInScreen