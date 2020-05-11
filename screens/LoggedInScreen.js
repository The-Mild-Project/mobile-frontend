import * as React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Storage from '../utility/Storage'
import {Feather} from '@expo/vector-icons'



/* navigation */
import { createStackNavigator, createAppContainer, NavigationContainer  } from 'react-navigation';

function LoggedInScreen({route, navigation}) {
    let storage = new Storage();

    let preference = "";
    storage.retrieve("preference").then((item) =>  {
       preference = item;
       console.log(preference)
    });

    let name = route.params.name;
    let email = route.params.email;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text>Hi {name}, welcome to the Food App</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.smallCenterButton} title="Browse Restaurants" onPress={() => navigation.navigate('Restaurants', {"name": name, "email": email})} />
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