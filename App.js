import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Components/Welcome';
import Instructions from './src/Components/Instruction'
import Register from './src/Components/Register';
import Home from './src/Components/Home';
import DonateBlood from './src/Components/DonateBlood';
import SubmitDetail from './src/Components/SubmitDetail';
import FindBlood from './src/Components/FindBlood';
import DonorsList from './src/Components/DonorsList';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'red',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Blood Bank App", headerTitleAlign: 'center' }} />
        <Stack.Screen name="Instructions" component={Instructions} options={{ title: "Instructions" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Login Screen" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Home Screen" }} />
        <Stack.Screen name="DonateBlood" component={DonateBlood} options={{ title: "Enter Details" }} />
        <Stack.Screen name="SubmitDetail" component={SubmitDetail} options={{ title: "Submit detail" }} />
        <Stack.Screen name="FindBlood" component={FindBlood} options={{ title: "Find Blood" }} />
        <Stack.Screen name="DonorsList" component={DonorsList} options={{ title: "Donors List" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
