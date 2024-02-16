import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'
import Users from '../screens/Users'
import AddUser from '../screens/AddUser'



const Stack=createStackNavigator()



const Tabs = () => {
    return ( 
          <Stack.Navigator>
        
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='AddUser' component={AddUser} />
    </Stack.Navigator> 
     );
}
 
export default Tabs;