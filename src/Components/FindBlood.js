import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../Config/Config'

const FindBlood = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("O+");
    const [cityName, setCityName] = useState('')


    const getUserData = () => {
        const userRef = firebase.database().ref('users')
            .once('value', function (data) {
                const dataObject = (data.val())
                const dataArray = Object.values(dataObject)
                // return dataArray
            })
            return userRef
    }

    console.log(getUserData())



    // firebase.database().ref('users').once('value')
    //     .then((snapshot) => {
    //         const dataObject = (snapshot.val())
    //         const dataArray = Object.values(dataObject)
    //         return dataArray;
    //     })
    // const userRef = (dataArray) => {
    //     console.log(dataArray.val())
    // }

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
                    <TextInput
                        style={styles.input}
                        placeholder="Enter CityName.."
                        value={cityName}
                        onChangeText={(text) => setCityName(text)}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={getUserData} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="search" size={20} /> Search Blood</Text>
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

export default FindBlood;
