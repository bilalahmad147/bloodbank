import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}><Icon name="ambulance" size={100} /></Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Sign Up</Text>
            </View>
            <View style={{ flex: 3 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter User name.."
                    value={name}
                    onChangeText={(text) => setName(text)}
                    autoCapitalize="none"
                />
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
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password.."
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    autoCapitalize="none"
                />
                <TouchableOpacity onPress={() => navigation.push('Home')} style={styles.btn}>
                    <Text style={styles.btnText}><Icon name="plus" size={20} /> Create account</Text>
                </TouchableOpacity>
                <Text style={styles.text1}>Alreay got an account ?
                    <TouchableOpacity onPress={() => navigation.push('Register')} style={styles.btn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </Text>
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
    text1: {
        color: "red",
        fontSize: 22,
        textAlign: 'center',
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

export default SignUp;
