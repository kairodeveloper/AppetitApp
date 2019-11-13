import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainPage from './pages/MainPage'
import Login from './pages/Login';

const RootStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    MainPage: {
        screen: MainPage,
        navigationOptions: {
            state:{
                checked: false,
             },
            title: "Central",
            headerTitleStyle: {
                color: "#FFF",
            },
            headerTitleStyle: {
                color: "#FFF"
            },
            headerTintColor:  "#FFF",
            headerStyle: {
                backgroundColor: "#343F4B"
            },
        }
    },
})

const AppContainer = createAppContainer(RootStack);

export default AppContainer;