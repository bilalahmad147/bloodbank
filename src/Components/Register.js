import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Welcome = () => {

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter user name.."
            />
            <TextInput
                style={styles.input}
                placeholder="Enter password.."
            />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}><Icon name="plus" size={20} /> Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default Welcome;
