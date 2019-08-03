import {createStackNavigator} from 'react-navigation';

import LoginScreen from '../screens/login'
import DashboardScreen from '../screens/dashboard'

export default AppNavigation = (authenticated) => createStackNavigator ({
    login: {
        getScreen: () => LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    dasboard: {
        getScreen:() => DashboardScreen,
        navigationOptions: {
            title: 'dasboard'
        }
    },

}, {
    initialRouteName: authenticated ? 'dasboard' : 'login'
})

