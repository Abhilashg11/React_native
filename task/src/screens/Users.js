import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../redux/UserSlice';
import { Ionicons} from '@expo/vector-icons'


const Users = () => {
  const navigation = useNavigation();
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <View style={{flex: 1}}>
      <View
       style={{top:0,marginLeft:320 }}
        onPress={() => {
          navigation.navigate('AddUser', {type: 'add'});
        }}>
       <Ionicons name="add-circle" size={38} color={"#008080"} onPress={() => {
          navigation.navigate('AddUser', {type: 'add'});
        }} />
      </View>
      <FlatList
        data={users.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderWidth: 1,
                borderColor:'#008080',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View >
                <Text style={{fontStyle:'italic',fontWeight:"600"}}>{'Name: ' + item.name}</Text>
                <Text style={{fontStyle:'italic',fontWeight:"600"}}>{'Email: ' + item.email}</Text>
                <Text style={{fontStyle:'italic',fontWeight:"600"}}>{'Mobile: ' + item.mobile}</Text>
                <Text style={{fontStyle:'italic',fontWeight:"600"}}>{'Address: ' + item.address}</Text>
              </View>
              <View style={{marginRight: 10}}>
              <Ionicons name="create" size={28} color={"purple"}  onPress={() => {
                    navigation.navigate('AddUser', {
                      type: 'edit',
                      data: item,
                      index: index,
                    })
           }}/>
                  
                <Ionicons name="trash-bin" size={28} color={"red"}  onPress={() => {
                    dispatch(deleteUser(index));
       
                 
                  }}/>
                 
              </View>
            </View>
          );
        }}
      />
      
    </View>
  );
};

export default Users;