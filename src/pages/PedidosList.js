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


export default class PedidosList extends Component {

    constructor(props) {
        super(props)

        let pedidos = []
        for (let index = 1; index < 10; index++) {
            let pedido = {}
            pedido.mid = index
            pedido.nome = 'João Ribeiro'
            pedido.valor = 5.0
            pedido.conteudo = '1x cuzcuz, 1x salgado'
            pedidos.push(pedido)
        }
        this.state = {
            pedidos: pedidos
        }
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: colorFundo, padding: 16}}>
                <View style={{width: '75%', paddingBottom: 8, borderBottomColor: colorGreenBorder, borderBottomWidth: 2}}>
                    <Text style={{fontSize: 24, color: colorPrimary}}>Olá, Usuário!</Text>
                </View>
                <View style={{
                            height: 56,
                            backgroundColor: colorWhite,
                            borderRadius: 2,
                            shadowColor: colorPrimary,
                            shadowOffset: { width: 1, height: 2 },
                            shadowOpacity: 0.7,
                            shadowRadius: 4,
                            elevation: 5,
                            marginTop: 24,
                            justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
                            <Image source={ PLUSICON } style={{ height: 24, width: 24, marginStart: 20}} />
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: colorInputBorder, marginStart: 20}}>FAZER NOVO PEDIDO</Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', marginTop: 16, borderBottomColor: colorInputBorder}}>
                    <Image source={ SEARCHICON } style={{ flex: 1, height: 24, width: 24}} />
                    <TextInput placeholder={'Digite a sua busca aqui'} style={{flex: 10,fontSize: 18, width: '100%', marginStart: 10}}></TextInput>
                    <Image source={ FILTERICON } style={{ height: 24, width: 24,flex: 1,}} />
                </View>
                <FlatList
                            style={{marginTop: 16}}
                            extraData={this.state}
                            data={this.state.pedidos}
                            renderItem={({ item }) => <TouchableOpacity onPress={() => {}}>
                                <View style={{
                                        height: 72,
                                        backgroundColor: colorWhite,
                                        borderRadius: 2,
                                        shadowColor: colorPrimary,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.7,
                                        shadowRadius: 4,
                                        elevation: 2,
                                        marginBottom: 8,
                                        paddingTop: 6,
                                        paddingBottom: 6,
                                        paddingStart: 16,
                                        paddingEnd: 16,
                                        flexDirection: 'row'}}>
                                            <View style={{flex: 1}}></View>
                                            <View style={{flex: 4, flexDirection: 'column'}}>
                                                <View style={{flex: 4, flexDirection: 'row'}}>
                                                    <View style={{flex: 4, flexDirection: 'column', justifyContent: 'center'}}>
                                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.nome}</Text>
                                                    </View>
                                                    <View style={{flex: 4, flexDirection: 'row-reverse'}}>
                                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>R$ {item.valor}</Text>
                                                    </View>
                                                </View>
                                                <View style={{flex: 4, justifyContent: 'center', flexDirection: 'column'}}>
                                                    <Text style={{fontSize: 16, color: colorInputBorder }}>{item.conteudo}</Text>
                                                </View>
                                            </View>
                                        </View>
                            </TouchableOpacity>
                }/>
                
            </View>
        )
    }
}