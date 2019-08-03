import React, { PureComponent } from 'react';
import {View, Text, Button } from 'react-native';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import {Login_success} from '../actions/ACTauthentication'

class LoginScreen extends PureComponent {
    constructor(props){
        super(props)
        this.attemptLogin = this.attemptLogin.bind(this)
    }

    attemptLogin() {
        // token de autenticação
        var token = "alguma coisa aki"
        this.props.authSuccess(token);
    }

    render(){
        return (
            <View style={{flex: 1, backgroundColor: "#ffc", alignItems: 'center', 
                justifyContent: 'center'}}>
                
                <Text> redux login example </Text>
                <Text> click on login to continue </Text>

                <Button 
                    color="#ccf" title="Login" onPress={this.attemptLogin}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        authSuccess:(token) => {
            AsyncStorage.multiSet([['token', token], ['authenticated', '1']])
            dispatch(Login_success())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
