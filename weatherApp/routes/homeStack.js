import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);