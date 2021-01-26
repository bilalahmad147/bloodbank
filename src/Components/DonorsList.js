import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DonorsList = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="heartbeat" size={100} /></Text>
                    <Text style={styles.text}>Donors List</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
                    <Text style={styles.text1}>Name : Bilal Ahmad Ph NO: 03082094560 BloodGroup : O+</Text>
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
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text1: {
        backgroundColor: 'red',
        margin: 10,
        color: "white",
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default DonorsList;
