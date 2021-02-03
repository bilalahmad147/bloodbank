import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../Config/Config'

const FindBlood = () => {

    const [selectedValue, setSelectedValue] = useState("O+");
    const [userData, setUserData] = useState([])

    const getUserData = () => {

        switch (selectedValue) {
            case 'O+':
                firebase.database().ref('users/O+').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'A+':
                firebase.database().ref('users/A+').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'B+':
                firebase.database().ref('users/B+').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'AB+':
                firebase.database().ref('users/AB+').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'O-':
                firebase.database().ref('users/O-').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'A-':
                firebase.database().ref('users/A-').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'B-':
                firebase.database().ref('users/B-').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            case 'AB-':
                firebase.database().ref('users/AB-').once('value').then(snapshot => {
                    const dataRef = Object.values(snapshot.val())
                    setUserData(dataRef)
                });
                break;
            default:
                console.log('default');
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="search" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Find Blood</Text>
                </View>
                <View style={{ flex: 3, margin: 20 }}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="AB+" value="AB+" />
                        <Picker.Item label="O-" value="O-" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB-" value="AB-" />
                    </Picker>
                    <TouchableOpacity onPress={getUserData} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="search" size={20} /> Search Blood</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 6 }}>
                        {
                            userData.map((ind, key) => {
                                return <View style={styles.view1} key={key}>
                                    <Text style={styles.text1}>Name: {ind.userName}</Text>
                                    <Text style={styles.text1}>BloodGroup : {ind.userBloodGroup}</Text>
                                    <Text style={styles.text1}>Ph NO: {ind.userPhoneNum}</Text>
                                    <Text style={styles.text1}>City Name: {ind.userCityName}</Text>
                                </View>
                            })
                        }
                    </View>
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
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
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
    },
    view1: {
        backgroundColor: 'red',
        padding: 9,
        borderRadius: 10,
        margin: 10,
    },
    text1: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    },
});

export default FindBlood;
