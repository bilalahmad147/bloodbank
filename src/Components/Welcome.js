import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Welcome = ({ navigation }) => {

    return (
        <View>
            <Text style={styles.text}>Find Donor</Text>
            <Text style={styles.text}>Or</Text>
            <Text style={styles.text}>Be Donor</Text>
            <Button
                title="Register YourSelf"
                onPress={() => navigation.push('Register')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 40,
        padding: 20,
        fontFamily: 'fantasy'
    },
});

export default Welcome;
