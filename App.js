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
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DonateBlood" component={DonateBlood} />
          <Stack.Screen name="SubmitDetail" component={SubmitDetail} />
          <Stack.Screen name="FindBlood" component={FindBlood} />
          <Stack.Screen name="SubmitInfo" component={SubmitInfo} />
          <Stack.Screen name="MapLocation" component={MapLocation} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
