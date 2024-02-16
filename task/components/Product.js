import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Product = (props)=> {

    const item = props.item

  return (
    <View style={styles.container}>
    <Text>{item.name}</Text>
    <Text>{item.age}</Text>
    <Text>{item.location}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Product