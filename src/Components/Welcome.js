import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flex: 1, padding: 30, marginTop: 30, alignItems: 'center' }}>
                    <Image style={{ width: 300, height: 170 }} source={require('./imgs/welcomeImg.png')} />
                </View>
                {/* <View style={{ flex: 3 }}>
                    <Text style={styles.text}>
                        <Image style={{ width: 300, height: 170 }} source={require('./imgs/welcomeImg.png')} />
                    </Text>
                </View> */}
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.btn}>
                        <Text style={styles.btnText}><Icon name="plus" size={20} /> Register YourSelf</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Instructions')} style={styles.btn}>
                        <Text style={styles.btnText}>Read Instructions <Icon name="question" size={20} /></Text>
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
        textAlign: 'center',
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
