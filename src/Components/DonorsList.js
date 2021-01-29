import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebase } from '../Config/Config'

const DonorsList = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}><Icon name="heartbeat" size={100} /></Text>
                    <Text style={styles.text}>Donors List</Text>
                </View>
                <View style={{ flex: 6 }}>
                    {/* <FlatList
                        data={userRef}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    /> */}
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
