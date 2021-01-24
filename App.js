import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  let [num,setNum] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={{color: "white",fontSize: 40 }}>Counter : {num}</Text>
      <Button title="Click" onPress={()=> setNum(++num)}></Button>
      <Image style={{width: 200, height: 200}} source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:*'}}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
