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
import { ICONMALE, ICONLAMP, ICONTV, ICONSNOW, ICONLOCK, PLUSICON, FILTERICON, SEARCHICON, RIGHTICON } from '../../images';
import { colorFundo, colorFundoPedidos, colorPrimary, colorGreenBorder, colorBlack, colorInputBorder, colorWhite } from '../global_components/colors';
import { saudacaoPedidosList, novoPedidoButtonLabel, inputBuscaPlaceholder, complementoDateEValor, prefixoDinheiroReal } from '../global_components/strings';


export default class NovoPedidoSegundaEtapa extends Component {

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

                <View style={{ flexDirection: 'row', marginTop: 16, marginStart: 16, marginEnd: 16 }}>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 16, color: colorBlack }}>Para quem você está vendendo?</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16, color: colorInputBorder }}>2 de 3</Text>
                    </View>
                </View>
                <View style={{ height: 10, flexDirection: 'row', marginTop: 6, marginStart: 16, marginEnd: 16, backgroundColor: '#rgba(0, 0, 0, 0.08)', borderRadius: 50 }}>
                    <View style={{ height: 10, flex: 2, backgroundColor: colorPrimary, borderRadius: 50 }} />
                    <View style={{ height: 10, flex: 1 }} />
                </View>
                <View style={styles.containerSearchField}>
                    <Image source={SEARCHICON} style={styles.iconButton} />
                    <TextInput placeholder={inputBuscaPlaceholder} style={styles.textSearchInput}></TextInput>
                </View>
                <View style={{ marginStart: 16 }}>
                    <Text style={styles.textCardDate}>Meus clientes</Text>
                </View>
                <FlatList
                    style={{ marginTop: 16, marginStart: 16, marginEnd: 16 }}
                    extraData={this.state}
                    data={this.state.clientes}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => { this.goToDetalheProduto() }}>
                        {item.showTipo ? (
                            <Text style={styles.textCardDate}>{item.produto.tipo}</Text>
                        ) : (
                                <View />
                            )}
                        <View style={styles.containerCard}>
                            <View flex={1}></View>
                            <View style={styles.subContainerCard}>
                                <View style={styles.containerTop}>
                                    <View style={styles.subContainerCard}>
                                        <Text style={styles.textPedidoTop}>{item.nome}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    } />
                <FAB buttonColor={colorPrimary}

                    iconTextColor={colorWhite}
                    onClickAction={() => {
                        this.props.navigation.navigate('RegistroBiometria', { onGoBack: this.refreshData })
                    }
                    }
                    visible={true} />

                <View style={{ height: 60, flexDirection: 'column', elevation: 10, backgroundColor: colorPrimary, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('NovoPedidoUltimaEtapa')
                    }}>
                        <View style={{ height: 50, width: '100%', borderRadius: 5, backgroundColor: colorPrimary, flexDirection: 'row' }}>
                            <View style={{ flex: 2, padding: 16, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: colorWhite, fontWeight: 'bold' }}>3 clientes selecionados</Text>
                            </View>
                            <View style={{ flex: 1, padding: 16, paddingEnd: 6, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ color: colorWhite, fontWeight: 'bold' }}>Avançar</Text>
                            </View>
                            <View style={{ justifyContent: 'center', marginEnd: 16 }}>
                                <Image source={RIGHTICON} style={styles.iconButton} />
                            </View>
                        </View>
                    </TouchableOpacity>
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