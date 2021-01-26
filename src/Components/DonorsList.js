import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DonorsList = () => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Text style={styles.text}><Icon name="heartbeat" size={100} /></Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Donors List</Text>
            </View>
            <View style={{ flex: 6 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Phone Number.."
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        color: "red",
        paddingTop: 30,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: "red",
        padding: 9,
        margin: 5,
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default DonorsList;
