import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter user name.."
            />
            <TextInput
                style={styles.input}
                placeholder="Enter password.."
            />
            <TouchableOpacity onPress={() => navigation.push('Home')} style={styles.btn}>
                <Text style={styles.btnText}><Icon name="plus" size={20} /> Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
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

export default Register;
