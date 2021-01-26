import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Welcome = ({ navigation }) => {

    return (
        // <View>
        // </View>
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text style={styles.text}>Find Donor Or Be Donor</Text>
                <Button
                    title="Register YourSelf"
                    onPress={() => navigation.push('Register')}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "black",
        fontSize: 40,
        fontFamily: 'fantasy'
    },
});

export default Welcome;
