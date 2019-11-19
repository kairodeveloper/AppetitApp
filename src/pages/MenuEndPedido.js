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
import DatePicker from 'react-native-datepicker'
import { ICONMALE, ICONLAMP, ICONTV, ICONSNOW, ICONLOCK, PLUSICON, FILTERICON, SEARCHICON, RIGHTICON, CALENDARICON, RIGHTPRIMARYICON, LOGOIMAGE, FUNDOMENU } from '../../images';
import { colorFundo, colorFundoPedidos, colorPrimary, colorGreenBorder, colorBlack, colorInputBorder, colorWhite } from '../global_components/colors';
import { saudacaoPedidosList, novoPedidoButtonLabel, inputBuscaPlaceholder, complementoDateEValor, prefixoDinheiroReal } from '../global_components/strings';


export default class MenuEndPedido extends Component {

    constructor(props) {
        super(props)

        let clientes = []
        let index = 1
        clientes.push({ mid: index++, nome: 'Joao' })
        clientes.push({ mid: index++, nome: 'Pedro' })
        clientes.push({ mid: index++, nome: 'Paulo' })
        clientes.push({ mid: index++, nome: 'Madalena' })
        clientes.push({ mid: index++, nome: 'Tiago' })
        clientes.push({ mid: index++, nome: 'Judas' })

        this.state = {
            clientes: clientes,
            cestinha: []
        }
    }

    goToDetalheProduto() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerFlexOne}>
                    <Image source={FUNDOMENU} style={styles.logo}/>
                </View>
                <View flex={1}>
                    <View style={[styles.buttonViewStyle, {opacity: this.state.opacityButton} ]}>
                        <Text style={{color: colorWhite}}>FINALIZAR PEDIDO</Text>
                    </View>
                    <View style={[styles.buttonViewStyle, {opacity: this.state.opacityButton, backgroundColor: colorWhite, borderColor: colorGreenBorder} ]}>
                        <Text style={{color: colorGreenBorder}}>VOLTAR PARA A PÁGINA INICIAL</Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorFundo
    }, 
    containerFlexOne: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    logo: {
      width: '75%', 
      marginTop: 16,
      marginBottom: 16,
      resizeMode: 'contain'
    }, 
    buttonViewStyle: {
        marginTop: 24, 
        marginStart: 16,
        marginEnd: 16,
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: colorPrimary, 
        height: 56, 
        borderColor: colorPrimary, 
        borderWidth: 2, 
        borderRadius: 100
      },
    containerSaudacao: {
        paddingBottom: 8,
        borderBottomColor: colorGreenBorder,
        borderBottomWidth: 2,
        marginTop: 16,
        marginStart: 16,
        marginEnd: 16
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
        marginStart: 16,
        marginEnd: 16,
        borderBottomColor: colorInputBorder
    },
    containerCard: {
        height: 72,
        backgroundColor: colorWhite,
        borderRadius: 2,
        shadowColor: colorPrimary,
        shadowOffset: { width: 0, height: 2 },
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
        flexDirection: 'column'
    },
    subContainerCard: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    subContainerCardValor: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
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
        color: colorInputBorder,
        marginTop: 16,
        marginStart: 16,
        marginEnd: 16
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