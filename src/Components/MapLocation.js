import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MapLocation = () => {

    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}><Icon name="plus" size={20} /> Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
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

export default MapLocation;
