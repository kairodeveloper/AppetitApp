import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './pages/Login';
import PedidosList from './pages/PedidosList';
import { colorPrimary } from './global_components/colors';

const RootStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    PedidosList: {
        screen: PedidosList,
        navigationOptions: {
            header: null,
        }
    },
})

const AppContainer = createAppContainer(RootStack);

export default AppContainer;