import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Components/Welcome';
import Register from './src/Components/Register';
import Home from './src/Components/Home';
import DonateBlood from './src/Components/DonateBlood';
import SubmitDetail from './src/Components/SubmitDetail';
import FindBlood from './src/Components/FindBlood';
import SubmitInfo from './src/Components/SubmitInfo';
import MapLocation from './src/Components/MapLocation';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ title: "Blood Bank App", headerTitleAlign: 'center' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "Login Screen" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Home Screen" }} />
        <Stack.Screen name="DonateBlood" component={DonateBlood} options={{ title: "Make Choice" }} />
        <Stack.Screen name="SubmitDetail" component={SubmitDetail} options={{ title: "Submit detail" }} />
        <Stack.Screen name="FindBlood" component={FindBlood} options={{ title: "Find Blood" }} />
        <Stack.Screen name="SubmitInfo" component={SubmitInfo} options={{ title: "Submit Detail" }} />
        <Stack.Screen name="MapLocation" component={MapLocation} options={{ title: "Google Map" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
