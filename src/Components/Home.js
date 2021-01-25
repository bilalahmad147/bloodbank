import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.push('DonateBlood')} style={styles.btn}>
                <Text style={styles.btnText}><Icon name="plus" size={20} />Find Blood</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('FindBlood')} style={styles.btn}>
                <Text style={styles.btnText}><Icon name="plus" size={20} />Donate Blood</Text>
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

export default Home;
