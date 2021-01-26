import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Login For Action</Text>
            </View>
            <View style={{ flex: 2 }}>
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
                <TouchableOpacity onPress={() => navigation.push('Home')} style={styles.btn}>
                    <Text style={styles.btnText}><Icon name="facebook" size={20} />aceBook Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
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
        margin: 10,
        fontSize: 30,
        textAlign: 'center',
        fontStyle: 'italic',
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
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default Register;
