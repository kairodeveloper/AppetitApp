/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

import { LOGOIMAGE, HIDEPASSWORD, SHOWPASSWORD } from '../../images'
import { colorFundo, colorPrimary, colorSubTitle, colorInputBorder, colorWhite, colorBlack } from '../global_components/colors';
import { welcomeLoginText, subTitleLoginText, loginButtonText, insertEmailText, insertSenhaText, emailText, senhaText } from '../global_components/strings';
import { white } from 'ansi-colors';

export default class Login extends Component {
    constructor(props) {
      super(props)

      this.state = {
        inputFocused: '',
        hidePassword: true,
        email: "",
        senha: "",
        opacityButton: 0.40
      }
    }

    render() {
      let focusedEmail = this.state.inputFocused==emailText
      let focusedSenha = this.state.inputFocused==senhaText
      let emailIsNotEmpty = this.state.email.length>0
      let senhaIsNotEmpty = this.state.senha.length>0

      return(
        <SafeAreaView style={styles.safeView}>
          <ScrollView style={styles.scrollView}>
            <View flex={1}>
              <View style={styles.containerFlexOne}>
                <Image source={LOGOIMAGE} style={styles.logo}/>
              </View>
              <View style={styles.containerFlexOne}>
                <Text style={styles.welcome}>{welcomeLoginText}</Text>
                <Text style={styles.subtitle}>{subTitleLoginText}</Text>
              </View>
              <View style={styles.containerFlexTwo}>
                <View style={ focusedEmail ? styles.containerSelectedInput : styles.containerInput}>
                  { focusedEmail ? (
                      <View style={styles.containerPopUpTitle}>
                        <Text style={{color: colorPrimary}}>{emailText}</Text>
                      </View>
                    ) : (
                      <View />
                    ) 
                  }

                  { emailIsNotEmpty && !focusedEmail ? (
                      <View style={styles.containerPopUpTitle}>
                        <Text style={{color: colorInputBorder}}>{emailText}</Text>
                      </View>
                  ) : (
                    <View />
                  ) }

                  <TextInput
                    onFocus={() => this.setState({ inputFocused: emailText })}
                    style={focusedEmail ? styles.inputFocusedValue : styles.inputValue}
                    placeholder={insertEmailText}
                    value={this.state.email}
                    selectionColor={colorPrimary}
                    onChangeText={(email) => {
                                    let opacity = email.length>0 && this.state.senha.length>0 ? 1 : 0.4 
                                        this.setState({ 
                                          opacityButton: opacity,
                                          email: email 
                                        })
                                    }
                                  }
                  />
                </View>
                <View style={focusedSenha ? styles.containerSelectedInput : styles.containerInput}>
                  { focusedSenha ? (
                      <View style={styles.containerPopUpTitle}>
                        <Text style={{color: colorPrimary}}>{senhaText}</Text>
                      </View>
                    ) : (
                      <View />
                    ) 
                  }

                  { senhaIsNotEmpty && !focusedSenha ? (
                      <View style={styles.containerPopUpTitle}>
                        <Text style={{color: colorInputBorder}}>{senhaText}</Text>
                      </View> 
                  ) : (
                    <View />
                  ) }

                  <View style={styles.containerInputAndToogle}>
                    <TextInput
                      onFocus={() => this.setState({ inputFocused: senhaText })}
                      style={focusedSenha ? styles.inputFocusedValue : styles.inputValue}
                      placeholder={insertSenhaText}
                      selectionColor={colorPrimary}
                      onChangeText={(senha) => 
                                      {
                                        let opacity = this.state.email.length>0 && senha.length>0 ? 1 : 0.4 
                                        this.setState({ 
                                          opacityButton: opacity,
                                          senha: senha 
                                        })
                                      }
                                    }
                      secureTextEntry={this.state.hidePassword}      
                    />
                    <TouchableOpacity onPress={() => this.setState({hidePassword: !this.state.hidePassword})}>
                      <Image source={ this.state.hidePassword ? HIDEPASSWORD : SHOWPASSWORD } style={{opacity: focusedSenha || senhaIsNotEmpty ? 1 : 0.4, height: 25, aspectRatio: 1}} />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity onPress={() => {
                  if (this.state.opacityButton==1) {
                    alert('login')
                  }
                }}>
                  <View style={[styles.buttonViewStyle, {opacity: this.state.opacityButton} ]}>
                    <Text style={styles.textButtonLogin}>{loginButtonText.toUpperCase()}</Text>
                  </View>
                </TouchableOpacity>
                
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
    }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,  
    backgroundColor: colorFundo
  },
  scrollView: {
    flex: 1,
    padding: 16
  },
  containerFlexOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  containerFlexTwo: {
    flex: 2,
    paddingTop: 16
  },
  containerInput: {
    marginTop: 16, 
    height: 60, 
    backgroundColor: colorWhite,
    borderColor: colorInputBorder, 
    borderWidth: 2, 
    borderRadius: 4,
    justifyContent: 'center'
  },
  containerSelectedInput: {
    marginTop: 16, 
    height: 60,
    backgroundColor: colorWhite,
    borderColor: colorPrimary, 
    borderWidth: 2, 
    borderRadius: 4,
    justifyContent: 'center'
  },
  containerPopUpTitle: {
    height: 2, 
    marginStart: 16,
    marginTop: -2, 
    backgroundColor: colorWhite, 
    maxWidth: 50, 
    justifyContent:'center', 
    alignItems: 'center'
  },
  containerInputAndToogle: {
    flex: 1, 
    paddingEnd: 16, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  buttonViewStyle: {
    marginTop: 24, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: colorPrimary, 
    height: 56, 
    borderColor: colorPrimary, 
    borderWidth: 2, 
    borderRadius: 100
  },
  logo: {
    width: '31%', 
    height: 100, 
    marginTop: 16,
    marginBottom: 16,
    resizeMode: 'contain'
  },
  welcome: {
    fontSize: 28, 
    color: colorPrimary, 
    marginTop: 16
  },
  subtitle: {
    marginStart: 16, 
    marginEnd: 16, 
    marginTop: 16, 
    alignSelf: 'flex-end', 
    textAlign: 'center', 
    fontSize: 16, 
    color: colorSubTitle
  },
  inputValue: {
    fontSize: 16, 
    paddingStart: 16,
    flex: 1
  },
  inputFocusedValue: {
    fontSize: 16, 
    paddingStart: 16,
    flex: 1
  },
  textButtonLogin: {
    color: colorWhite, 
    fontSize: 16
  }
})