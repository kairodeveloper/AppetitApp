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
import { ICONMALE, ICONLAMP, ICONTV, ICONSNOW, ICONLOCK } from '../../images';


export default class MainPage extends Component {

    constructor(props) {
        super(props)

        let comodos = []
        for (let index = 1; index < 20; index++) {
            let comodo = {}
            comodo.mid = index
            comodo.nome = 'comodo nº '+index
            comodos.push(comodo)
        }
        this.state = {
            comodoSelecionado: comodos[0].mid,
            comodoSelecionadoNome: comodos[0].nome,
            comodos: comodos
        }
    }

    setSelecionado(mid) {
        let comodos = this.state.comodos
        let comodo = {}

        comodos.map((it) => {
            if (it.mid===mid) {
                comodo=it
            }
        })

        this.setState({
            comodoSelecionado: mid,
            comodoSelecionadoNome: comodo.nome
        })
    }

    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
                <View style={{flex:3, flexDirection: 'column', backgroundColor: '#343F4B', alignItems: 'center'}}>
                    <View style={{flex: 3, justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 56, color: '#FFF', marginBottom: 6}}>3 kw/h</Text>
                    </View>
                    <View style={{flex: 3, marginStart: 32, marginEnd: 32, borderTopWidth: 1, borderTopColor: '#FFF', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 16, color: '#FFF', marginTop: 16}}>Consumo atual</Text>
                    </View>
                    
                </View>
                <View style={{flex:1, backgroundColor: '#830B95'}}>

                    <FlatList
                    extraData={this.state}
                    horizontal={true}
                    data={this.state.comodos}
                    snapToAlignment={"center"}
                    flex={1}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => {
                            this.setSelecionado(item.mid)
                        }}>
                            <View style={{flex: 1, minWidth: 100, borderWidth: 1, borderBottomWidth: this.state.comodoSelecionado==item.mid ? 5 : 1, borderColor: '#8492A6', alignItems: 'center', justifyContent:'center'}}>
                                <Text style={{color: '#FFF'}}>{item.nome}</Text>
                            </View>  
                        </TouchableOpacity>
                    }
                    />
                </View>
                <View style={{flex:4, padding: 16}}>
                    <FAB buttonColor={'#3B4859'} 
                            iconTextColor={'#FFF'} 
                            onClickAction={() => {
                                    this.props.navigation.navigate('RegistroBiometria', {onGoBack: this.refreshData})
                                }
                            } 
                            visible={true} />
                    <View style={{flex: 1, justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: '#8492A6'}}>
                        <Text style={{fontSize: 24, color: '#808080'}}>{this.state.comodoSelecionadoNome}</Text>    
                    </View>
                    <View style={{flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View flex={2}>
                            <View style={{ aspectRatio: 1, marginEnd: 6, alignItems: 'center', padding: 16, borderWidth: 1, borderColor: '#830B95', borderRadius: 50}}>
                                <Image source={ICONLAMP} style={{flex: 2, height: '100%', resizeMode: 'contain'}} />
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 6}}>
                                <Text style={{color: '#830B95'}}>Luzes</Text>
                            </View>
                        </View>
                        <View flex={2}>
                            <View style={{ aspectRatio: 1, marginEnd: 6, alignItems: 'center', padding: 16, borderWidth: 1, borderColor: '#830B95', borderRadius: 50}}>
                                <Image source={ICONTV} style={{flex: 1, height: '100%', resizeMode: 'contain'}} />
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 6}}>
                                <Text style={{color: '#830B95' }}>Eletrônicos</Text>
                            </View>
                        </View>
                        <View flex={2}>
                            <View style={{aspectRatio: 1, marginEnd: 6, alignItems: 'center', padding: 16, borderWidth: 1, borderColor: '#830B95', borderRadius: 50}}>
                                <Image source={ICONSNOW} style={{flex: 1, height: '100%', resizeMode: 'contain'}} />
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 6}}>
                                <Text style={{color: '#830B95'}}>Clima</Text>
                            </View>
                        </View>
                        <View flex={2}>
                            <View style={{aspectRatio: 1, alignItems: 'center', padding: 16, borderWidth: 1, borderColor: '#830B95', borderRadius: 50}}>
                                <Image source={ICONLOCK} style={{flex: 1, height: '100%', resizeMode: 'contain'}} />
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 6}}>
                                <Text style={{color: '#830B95'}}>Segurança</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 2, justifyContent: 'flex-end'}}>

                        
                    </View>
                    
                </View>
                <View style={{flex:1, flexDirection: 'row', marginEnd: '30%', borderTopWidth: 1, borderTopColor: '#8492A6'}}>
                    <View style={{flex: 1, flexDirection: 'column', padding: 6, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 1, aspectRatio: 1, alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#830B95', borderRadius: 50}}>
                            <Image source={ICONMALE} style={{lex: 1, height: '100%', resizeMode: 'contain'}} />
                        </View>
                    </View>
                    <View style={{flex: 2, flexDirection: 'column', paddingStart: 6, justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: '#1F2D3D'}}>Kairo Costa</Text>
                        <Text style={{color: '#8492A6'}}>Saúde normal</Text>
                    </View>
                </View>
            </View>
        )
    }
}