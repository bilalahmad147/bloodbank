import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Welcome = () => {

    let [num, setNum] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={{ color: "black", fontSize: 40 }}>Counter : {num}</Text>
            <Button title="Click" onPress={() => setNum(++num)}></Button>
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
