import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import LoggedInScreen from "./screens/LoggedInScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="LoggedInScreen" component={LoggedInScreen} />
            <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
            <Stack.Screen name="ResultsShowScreen" component={ResultsShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;