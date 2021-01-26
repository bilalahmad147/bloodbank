import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, padding: 30, marginTop: 30 }}>
                <Image style={{ width: 300, height: 170 }} source={require('./imgs/welcomeImg.png')} />
            </View>
            <View style={{ flex: 2 }}>
                <TouchableOpacity onPress={() => navigation.push('Register')} style={styles.btn}>
                    <Text style={styles.btnText}><Icon name="plus" size={20} /> Register YourSelf</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Register')} style={styles.btn}>
                    <Text style={styles.btnText}>Read Instructions <Icon name="question" size={20} /></Text>
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

export default Welcome;
