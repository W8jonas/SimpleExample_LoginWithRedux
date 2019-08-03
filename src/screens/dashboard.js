import React, { PureComponent } from 'react';
import {View, Text, Button } from 'react-native';
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import {Logout} from '../actions/ACTauthentication'

class DashboardScreen extends PureComponent {
    constructor(props){
        super(props)
        this.attemptLogout = this.attemptLogout.bind(this)
    }

    attemptLogout() {
        // deslogando
        this.props.authLogout();
    }

    render(){
        return (
            <View style={{flex: 1, backgroundColor: "#ffc", alignItems: 'center', 
                justifyContent: 'center'}}>
                
                <Text style={{fontSize: 25}}> Bem vindo usuário qualquer </Text>
                <Text style={{fontSize: 25}}> Nós não te quereos aqui</Text>
                
                <Button 
                    color="#ccf" title="Logout" onPress={this.attemptLogout}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        authLogout:() => {
            AsyncStorage.multiRemove(['token', 'authenticated'])
            dispatch(Logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
