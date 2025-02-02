import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="medkit" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Make Choice</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('DonateBlood')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Donate Blood</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('FindBlood')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="search" size={20} /> Find Blood</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
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
        borderRadius: 10,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    }
});

export default Home;
