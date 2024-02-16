import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function Home({ navigation }) {

  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push('ReviewDetails');
  }

  return (
    <View style>
      <Text >Home Screen</Text>
      <Button title='to review details screen' onPress={pressHandler} />
    </View>
  );
}