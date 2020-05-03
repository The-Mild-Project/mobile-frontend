import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import LoggedInScreen from "./screens/LoggedInScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";
import PreferencesScreen from "./screens/PreferencesScreen";
import CreatePreferenceScreen from "./screens/CreatePreferenceScreen";



const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Home" component={LoggedInScreen} />
            <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
            <Stack.Screen name="Restaurant" component={ResultsShowScreen} />
            <Stack.Screen name="Preferences" component={PreferencesScreen} />
            <Stack.Screen options={{ title: 'Add a Food Preference' }} name="Create Preference" component={CreatePreferenceScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;