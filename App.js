import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOption: {
    title: 'Business - Search'
  }
});

export default createAppContainer(navigator);
