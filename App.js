import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import LoggedInScreen from "./screens/LoggedInScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";
import PreferencesScreen from "./screens/PreferencesScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CreatePreferenceScreen from "./screens/CreatePreferenceScreen";
import RecsScreen from "./screens/RecsScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#DC143C',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Home" component={LoggedInScreen} />
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen name="Restaurant" component={ResultsShowScreen} />
            <Stack.Screen name="Preferences" component={PreferencesScreen} />
            <Stack.Screen options={{ title: 'Add a Food Preference' }} name="Create Preference" component={CreatePreferenceScreen} />
            <Stack.Screen name="Recs" options={{ title: 'Recommendations' }} component={RecsScreen} />
        </Stack.Navigator>
    )
}
function App() {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 40
    }
});

export default App;