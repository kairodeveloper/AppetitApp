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
import { ICONMALE, ICONLAMP, ICONTV, ICONSNOW, ICONLOCK, PLUSICON, FILTERICON, SEARCHICON, RIGHTICON, CALENDARICON, RIGHTPRIMARYICON } from '../../images';
import { colorFundo, colorFundoPedidos, colorPrimary, colorGreenBorder, colorBlack, colorInputBorder, colorWhite } from '../global_components/colors';
import { saudacaoPedidosList, novoPedidoButtonLabel, inputBuscaPlaceholder, complementoDateEValor, prefixoDinheiroReal } from '../global_components/strings';


export default class NovoPedidoUltimaEtapa extends Component {

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
                <View style={styles.containerSaudacao}>
                    <Text style={styles.saudacao}>Informações para o pedido</Text>
                </View>
                <Text style={styles.textButton}>Preencha as informações abaixo para concluir o pedido.</Text>

                <View style={{ flexDirection: 'row', marginStart: 16, marginEnd: 16 }}>
                    <View style={{ flex: 3 }}>
                        <Text style={styles.textCardDate}>Finalizar o pedido</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16, color: colorInputBorder }}>3 de 3</Text>
                    </View>
                </View>
                <View style={{ height: 10, flexDirection: 'row', marginTop: 6, marginStart: 16, marginEnd: 16, backgroundColor: '#rgba(0, 0, 0, 0.08)', borderRadius: 50 }}>
                    <View style={{ height: 10, flex: 3, backgroundColor: colorPrimary, borderRadius: 50 }} />
                </View>
                <View style={{ marginStart: 16 }}>
                    <Text style={styles.textCardDate}>O cliente já pagou?</Text>
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center', marginStart: 16, marginEnd: 16, backgroundColor: colorWhite, borderColor: colorInputBorder, borderWidth: 1, borderRadius: 4}}>
                    <View style={{flex: 2, flexDirection: 'column', alignItems: 'center'}}>
                        <View style={{height: 18, width: 18, borderWidth: 2, borderRadius: 25, borderColor: colorPrimary, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            
                        </View>
                    </View>
                    <View style={{flex: 8}}>
                        <Text style={{fontSize: 16}}>Sim</Text>
                    </View>
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginStart: 16, marginEnd: 16, backgroundColor: colorWhite, borderColor: colorInputBorder, borderWidth: 1, borderRadius: 4}}>
                    <View style={{flex: 2, flexDirection: 'column', alignItems: 'center'}}>
                        <View style={{height: 18, width: 18, borderWidth: 2, borderRadius: 25, borderColor: colorPrimary, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{height: 10, width: 10, backgroundColor: colorPrimary, borderRadius: 25}}/>
                        </View>
                    </View>
                    <View style={{flex: 8}}>
                        <Text style={{fontSize: 16}}>Não</Text>
                    </View>
                </View>
                <View style={{ marginStart: 16 }}>
                    <Text style={styles.textCardDate}>Em que data o pedido foi realizado?</Text>
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center', marginStart: 16, paddingStart: 16, marginEnd: 16, paddingEnd: 16, backgroundColor: colorWhite, borderColor: colorInputBorder, borderWidth: 1, borderRadius: 4}}>
                    <Image source={CALENDARICON} style={styles.iconButton} />
                    <DatePicker
                        style={{ color: colorBlack, flex: 1 }}
                        date={this.state.date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        format="DD-MM-YYYY"
                        minDate="01-01-2000"
                        maxDate="31-12-2100"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            display: 'none',
                            left: 0,
                            marginLeft: 0
                        },
                        dateInput: {
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            backgroundColor: colorWhite,
                            paddingStart: 16,
                            borderWidth: 1,
                            borderColor: colorWhite,
                            color: colorBlack
                        }
                        }}
                        onDateChange={(date) => { this.setState({ date: date, dateHasChange: true }) }}
                    />
                    <Image source={RIGHTPRIMARYICON} style={styles.iconButton} />
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('MenuEndPedido')
                }}>
                    <View style={[styles.buttonViewStyle, {opacity: this.state.opacityButton} ]}>
                        <Text style={{color: colorWhite}}>FINALIZAR PEDIDO</Text>
                    </View>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorFundo
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