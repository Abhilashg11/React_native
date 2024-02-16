
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './screens/Drawer';

const Drawer = createDrawerNavigator()

export default function App() {



return (
    <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name = "Home[]" component ={Home}/>
        <Drawer.Screen name = "Notification[]" component ={Notification}/>

    </Drawer.Navigator>
    </NavigationContainer>
    );
 
}
