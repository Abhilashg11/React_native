
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Users from '../screens/Users'
import AddUser from '../screens/AddUser'
import Tabs from './tabs'
import Profile from './profile';
import { Ionicons} from '@expo/vector-icons'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const Stack=createStackNavigator()

const AppNavigator = () => {
  return  (
  
  
        <Tab.Navigator screenOptions={{headerShown:false}}>
        
            
            <Tab.Screen name="Summary" component={StackNavigator} options={{
            tabBarIcon: <ion-icon name="notification"></ion-icon>
          }}/>
            <Tab.Screen name="AddUser" component={Profile} options={{
            tabBarIcon: ()=><Ionicons name="person"></Ionicons >,
          }}/>

        </Tab.Navigator>
   
  )
}

function StackNavigator () {
    return ( 
        <Stack.Navigator>
        
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='AddUser' component={AddUser} />
    </Stack.Navigator> 
     );
}
 


export default AppNavigator







