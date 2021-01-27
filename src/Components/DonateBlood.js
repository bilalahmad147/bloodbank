import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DonateBlood = ({ navigation }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [cityName, setCityName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 2 }}>
                    <Text style={styles.text}><Icon name="info" size={100} /></Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Enter Details</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Name.."
                        value={name}
                        onChangeText={(text) => setName(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Age.."
                        value={age}
                        onChangeText={(text) => setAge(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Blood Group.."
                        value={bloodGroup}
                        onChangeText={(text) => setBloodGroup(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter CityName.."
                        value={cityName}
                        onChangeText={(text) => setCityName(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Phone Number.."
                        value={phoneNum}
                        onChangeText={(text) => setPhoneNum(text)}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => navigation.push('SubmitDetail')} style={styles.btn}>
                        <Text style={styles.btnText}>Submit Detail <Icon name="share" size={20} /></Text>
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

export default DonateBlood;
