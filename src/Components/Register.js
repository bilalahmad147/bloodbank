import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const Welcome = () => {

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
            />
            <Button title="Register YourSelf"></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Welcome;
