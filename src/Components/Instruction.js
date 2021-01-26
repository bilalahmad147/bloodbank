import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Instructions = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}><Icon name="circle" size={16} /> Welcome to blood bank app</Text>
                <Text style={styles.text}><Icon name="circle" size={16} /> You have to follw these steps for using this blood bank app.</Text>
                <Text style={styles.text}><Icon name="circle" size={16} /> First, you have to register youself using email and password.</Text>
                <Text style={styles.text}><Icon name="circle" size={16} /> You can register by using facebook login.</Text>
                <Text style={styles.text}><Icon name="circle" size={16} /> You have to choose one option. Either you will be a donor or blood seeker.</Text>
                <Text style={styles.text}><Icon name="circle" size={16} /> For donating blood you have to submit your details like name, age, blood group and location.</Text>
                <Text style={styles.text}><Icon name="circle" size={16} /> For finding blood, You have to search blood group and city name so that we can show further detail about donor.</Text>
            </ScrollView>
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
        fontSize: 22,
        padding: 10,
        margin: 10,
    }
});

export default Instructions;
