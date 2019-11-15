import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
} from 'react-native'
import FAB from 'react-native-fab'
import { ICONMALE, ICONLAMP, ICONTV, ICONSNOW, ICONLOCK, PLUSICON, FILTERICON, SEARCHICON } from '../../images';
import { colorFundo, colorFundoPedidos, colorPrimary, colorGreenBorder, colorBlack, colorInputBorder, colorWhite } from '../global_components/colors';
import { saudacaoPedidosList, novoPedidoButtonLabel, inputBuscaPlaceholder, complementoDateEValor, prefixoDinheiroReal } from '../global_components/strings';


export default class PedidosList extends Component {

    constructor(props) {
        super(props)

        let pedidos = []
        let dateImpar = "2019-11-05"
        let datePar = "2019-11-06"
        let indexs = 1
        for (let index = 1; index < 10; index++) {
            let pedido = {}
            pedido.mid = index
            pedido.nome = 'João Ribeiro'
            pedido.valor = 5.0
            pedido.valorTodos = 0
            pedido.conteudo = '1x cuzcuz, 1x salgado'
            pedido.date = index%2==0 ? new Date(datePar) : new Date(dateImpar)
            pedidos.push(pedido)
            indexs = index
        }

        let pedido = {}
        pedido.mid = indexs
        pedido.nome = 'João Ribeiro'
        pedido.valor = 5.0
        pedido.valorTodos = 0
        pedido.conteudo = '1x cuzcuz, 1x salgado'
        pedido.date = new Date()
        pedidos.push(pedido)

        pedidos = this.ordernarPedidosPelaData(pedidos)
        pedidos = this.agruparPorData(pedidos)

        this.state = {
            pedidos: pedidos
        }
    }

    ordernarPedidosPelaData = (pedidos) => {
        let pedidosOrdenados = pedidos
        for (let j = 0; j < pedidosOrdenados.length; j++) {
            for (let k = 0; k < pedidosOrdenados.length-1; k++) {
                if (pedidosOrdenados[k].date.getTime() < pedidosOrdenados[k+1].date.getTime()){
                    let pedido = pedidosOrdenados[k]
                    pedidosOrdenados[k] = pedidosOrdenados[k+1]
                    pedidosOrdenados[k+1] = pedido
                }
            }
        }
        return pedidos
    }

    agruparPorData = (pedidos) => {
        let pedidosAgrupados = pedidos
        let containersPedidos = []
        for (let index = 0; index < pedidosAgrupados.length; index++) {
            let pedidoContainer = {}
            pedidoContainer.pedido = pedidosAgrupados[index]
            if (index == 0) {
                pedidoContainer.showDate = true
            } else if (pedidosAgrupados[index-1].date.getTime()==pedidosAgrupados[index].date.getTime()) {
                pedidoContainer.showDate = false
            } else {
                pedidoContainer.showDate = true
            }
            containersPedidos.push(pedidoContainer)
        }
        return containersPedidos
    }

    valorPorData = (data) => {
        let valor = 0
        let containersPedidos = this.state.pedidos
        containersPedidos.map((it) => {
            if (it.pedido.date.getTime()==data.getTime()) {
                valor+=it.pedido.valor
            }
        })
        return valor
    }

    getDate = (date) => {
        return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
    }

    goToNovoPedido() {
        this.props.navigation.navigate('NovoPedidoPrimeiraEtapa')
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerSaudacao}>
                    <Text style={styles.saudacao}>{saudacaoPedidosList}</Text>
                </View>
                <View style={styles.containerButtonNovoPedido}>
                    <TouchableOpacity onPress={() => {
                        this.goToNovoPedido()
                    }}>
                        <View style={styles.buttonView}>
                            <Image source={ PLUSICON } style={styles.iconButton} />
                            <Text style={styles.textButton}>{novoPedidoButtonLabel}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerSearchField}>
                    <Image source={ SEARCHICON } style={styles.iconButton} />
                    <TextInput placeholder={inputBuscaPlaceholder} style={styles.textSearchInput}></TextInput>
                    <Image source={ FILTERICON } style={styles.iconButton} />
                </View>
                <FlatList
                    style={{marginTop: 16}}
                    extraData={this.state}
                    data={this.state.pedidos}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => {}}>
                        { item.showDate ? (
                            <Text style={styles.textCardDate}>{this.getDate(item.pedido.date)}{complementoDateEValor}{this.valorPorData(item.pedido.date)}</Text>
                        ) : (
                            <View />
                        ) }
                        
                        <View style={styles.containerCard}>
                                    <View flex = {1}></View>
                                    <View style={styles.subContainerCard}>
                                        <View style={styles.containerTop}>
                                            <View style={styles.subContainerCard}>
                                                <Text style={styles.textPedidoTop}>{item.pedido.nome}</Text>
                                            </View>
                                            <View style={styles.subContainerCardValor}>
                                                <Text style={styles.textPedidoTop}>{prefixoDinheiroReal}{item.pedido.valor}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.subContainerCard}>
                                            <Text style={styles.textPedidoBottom}>{item.pedido.conteudo}</Text>
                                        </View>
                                    </View>
                                </View>
                    </TouchableOpacity>
                }/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colorFundo, 
        padding: 16
    },
    containerSaudacao: {
        width: '75%', 
        paddingBottom: 8, 
        borderBottomColor: colorGreenBorder, 
        borderBottomWidth: 2
    },
    containerButtonNovoPedido: {
        height: 56,
        backgroundColor: colorWhite,
        borderRadius: 2,
        shadowColor: colorPrimary,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 24,
        paddingStart: 20,
        justifyContent: 'center'
    },
    containerSearchField: { 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 16, 
        borderBottomColor: colorInputBorder
    },
    containerCard: {
        height: 80,
        backgroundColor: colorWhite,
        borderRadius: 2,
        shadowColor: colorPrimary, 
        shadowOffset: { width: 0,  height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 16,
        paddingEnd: 16,
        flexDirection: 'row'
    },
    containerTop: {
        flex: 4, 
        flexDirection: 'row'
    },
    subContainerCard: {
        flex: 4, 
        flexDirection: 'column',
        justifyContent: 'center'
    },
    subContainerCardValor: {
        flex: 4, 
        alignItems: 'flex-end'
    },
    buttonView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 30
    },
    iconButton: { 
        height: 24, 
        width: 24
    },
    textButton: {
        fontSize: 16, 
        fontWeight: 'bold', 
        color: colorInputBorder, 
        marginStart: 20
    },
    saudacao: {
        fontSize: 24, 
        color: colorPrimary
    },
    textSearchInput: {
        flex: 10,
        fontSize: 18, 
        width: '100%', marginStart: 10
    },
    textCardDate: {
        marginTop: 16, 
        marginBottom: 10, 
        fontSize: 16, 
        color: colorBlack, 
        fontWeight: 'bold'
    },
    textPedidoTop: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    textPedidoBottom: {
        fontSize: 16,
        color: colorInputBorder
    }
})