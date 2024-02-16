
import { StyleSheet, Text, View } from 'react-native';


const Header = () =>  {
 
  return (
    <View >
        <Text style = {styles.container}>add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:30,
    padding:30,
    marginLeft:230
    
   
  },
});

export default Header