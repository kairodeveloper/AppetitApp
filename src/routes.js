import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './pages/Login';
import PedidosList from './pages/PedidosList';
import { colorPrimary, colorFundo, colorWhite } from './global_components/colors';
import NovoPedidoPrimeiraEtapa from './pages/NovoPedidoPrimeiraEtapa';
import DetalhesProduto from './pages/DetalhesProduto';
import NovoPedidoSegundaEtapa from './pages/NovoPedidoSegundaEtapa';
import NovoPedidoUltimaEtapa from './pages/NovoPedidoUltimaEtapa';
import MenuEndPedido from './pages/MenuEndPedido';

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
    NovoPedidoSegundaEtapa: {
        screen: NovoPedidoSegundaEtapa,
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
    NovoPedidoUltimaEtapa: {
        screen: NovoPedidoUltimaEtapa,
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
    DetalhesProduto: {
        screen: DetalhesProduto,
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
    MenuEndPedido: {
        screen: MenuEndPedido,
        navigationOptions: {
            header: null
        }
    }
})

const AppContainer = createAppContainer(RootStack);

export default AppContainer;