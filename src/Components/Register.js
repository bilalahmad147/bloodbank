import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}><Icon name="ambulance" size={100} /></Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Login To Proceed</Text>
            </View>
            <View style={{ flex: 3 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter User Email.."
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password.."
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => navigation.push('Home')} style={styles.btn}>
                    <Text style={styles.btnText}><Icon name="plus" size={20} /> Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Home')} style={styles.btn}>
                    <Text style={styles.btnText}><Icon name="facebook" size={20} />aceBook Login</Text>
                </TouchableOpacity>
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

export default Register;
