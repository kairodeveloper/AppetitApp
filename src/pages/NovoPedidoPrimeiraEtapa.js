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


export default class NovoPedidoPrimeiraEtapa extends Component {

    constructor(props) {
        super(props)

        let produtos = []
        let index = 1
        produtos.push({mid: index++, nome: 'Cuscuz simples', opcoes: [{name: 'milho', label: 'Cuscuz de milho', selecionado: false}, {name: 'arroz', label: 'Cuscuz de arroz', selecionado: false}], valor: 2.25, tipo: 'Cuscuz'})
        produtos.push({mid: index++, nome: 'Cuscuz completo', opcoes: [{name: 'milho', label: 'Cuscuz de milho', selecionado: false}, {name: 'arroz', label: 'Cuscuz de arroz', selecionado: false}], valor: 3.25, tipo: 'Cuscuz'})
        produtos.push({mid: index++, nome: 'Pão caseiro', opcoes: [], valor: 2.25, tipo: 'Pães'})
        produtos.push({mid: index++, nome: 'Pão caseiro completo', opcoes: [], valor: 3.25, tipo: 'Pães'})
        produtos.push({mid: index++, nome: 'Misto quente', opcoes: [], valor: 3.0, tipo: 'Pães'})
        produtos.push({mid: index++, nome: 'Língua de sogra (pq.)', opcoes: [], valor: 2.0, tipo: 'Pães'})
        produtos.push({mid: index++, nome: 'Café simples', opcoes: [], valor: 2.0, tipo: 'Café'})
        produtos.push({mid: index++, nome: 'Café com leite', opcoes: [], valor: 2.50, tipo: 'Café'})
        produtos.push({mid: index++, nome: 'Café descafeinado', opcoes: [], valor: 3.0, tipo: 'Café'})
        produtos.push({mid: index++, nome: 'Coxinha', opcoes: [], valor: 2.0, tipo: 'Salgados'})
        produtos.push({mid: index++, nome: 'Pastel', opcoes: [
            {name: 'frango', label: 'Pastel de frango', selecionado: false}, 
            {name: 'carne', label: 'Pastel de carne ', selecionado: false},
            {name: 'queijo', label: 'Pastel de queijo ', selecionado: false}
        ], valor: 2.0, tipo: 'Salgados'})
        produtos.push({mid: index++, nome: 'Enrolado', opcoes: [], valor: 2.0, tipo: 'Salgados'})
        produtos.push({mid: index++, nome: 'Croissant', opcoes: [], valor: 3.0, tipo: 'Salgados'})

        produtos = this.agruparPorTipo(produtos)
        this.state = {
            produtos: produtos,
            cestinha: []
        }
    }

    agruparPorTipo = (produtos) => {
        let produtosAgrupados = produtos
        let containersProdutos = []
        for (let index = 0; index < produtosAgrupados.length; index++) {
            let produtoContainer = {}
            produtoContainer.produto = produtosAgrupados[index]
            if (index == 0) {
                produtoContainer.showTipo = true
            } else if (produtosAgrupados[index-1].tipo==produtosAgrupados[index].tipo) {
                produtoContainer.showTipo = false
            } else {
                produtoContainer.showTipo = true
            }
            containersProdutos.push(produtoContainer)
        }
        return containersProdutos
    }
    

    getOpcoesLabel(opcoes) {
        let retorno = ""
        let counter = 0
        let last = opcoes.length

        opcoes.map((it) => {
            retorno += it.name
            if (counter==last-1) {
                retorno+= "."
            } else {
                retorno += " ou "
            }
            counter ++
        })

        return retorno.length>18 ? retorno.substring(0, 15)+"..." : retorno

    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerSaudacao}>
                    <Text style={styles.saudacao}>Informações para o pedido</Text>
                </View>
                <Text style={styles.textButton}>Preencha as informações abaixo para concluir o pedido.</Text>
                
                <View style={{flexDirection: 'row', marginTop: 16}}>
                    <View style={{flex: 2}}>
                        <Text style={{fontSize: 16, color: colorBlack}}>O que você está vendendo?</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 16, color: colorInputBorder}}>1 de 3</Text>
                    </View>
                </View>
                <View style={{height: 10, flexDirection: 'row', marginTop: 6, backgroundColor: '#rgba(0, 0, 0, 0.08)', borderRadius: 50}}>
                    <View style={{height: 10, flex: 1, backgroundColor: colorPrimary, borderRadius: 50}} />
                    <View style={{height: 10, flex: 2}} />
                </View>
                <View style={styles.containerSearchField}>
                    <Image source={ SEARCHICON } style={styles.iconButton} />
                    <TextInput placeholder={inputBuscaPlaceholder} style={styles.textSearchInput}></TextInput>
                </View>
                <FlatList
                    style={{marginTop: 16}}
                    extraData={this.state}
                    data={this.state.produtos}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => {}}>
                        { item.showTipo ? (
                            <Text style={styles.textCardDate}>{item.produto.tipo}</Text>
                        ) : (
                            <View />
                        )}
                        <View style={styles.containerCard}>
                                    <View flex = {1}></View>
                                    <View style={styles.subContainerCard}>
                                        <View style={styles.containerTop}>
                                            <View style={styles.subContainerCard}>
                                                <Text style={styles.textPedidoTop}>{item.produto.nome}</Text>
                                            </View>
                                            { item.produto.opcoes.length>0 ? (
                                                <View style={styles.subContainerCard}>
                                                    <Text style={styles.textPedidoBottom}>{this.getOpcoesLabel(item.produto.opcoes)}</Text>
                                                </View>
                                            ) : (
                                                <View />
                                            ) }
                                            
                                        </View>
                                        <View style={styles.subContainerCardValor}>
                                            <Text style={styles.textPedidoTop}>{prefixoDinheiroReal}{item.produto.valor}</Text>
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
        width: '100%', 
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
        marginTop: 16
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