import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './pages/Login';
import PedidosList from './pages/PedidosList';
import { colorPrimary, colorFundo, colorWhite } from './global_components/colors';
import NovoPedidoPrimeiraEtapa from './pages/NovoPedidoPrimeiraEtapa';

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
    NovoPedidoPrimeiraEtapa: {
        screen: NovoPedidoPrimeiraEtapa,
        navigationOptions: {
            headerTitleStyle: {
                color: colorPrimary,
            },
            headerTintColor:  colorPrimary,
            headerStyle: {
                backgroundColor: colorFundo
            },
        }
    },
})

const AppContainer = createAppContainer(RootStack);

export default AppContainer;