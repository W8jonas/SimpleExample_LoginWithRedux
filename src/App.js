
import React, {PureComponent} from 'react';

import {Text, View, ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import AppNavigation from './shared/navigation'

import {connect} from 'react-redux'

import {App_loaded} from './actions/ACTauthentication'
import {Login_success} from './actions/ACTauthentication'

class AppRoot extends PureComponent{
	constructor(props){
        super(props)
	}
	
	componentDidMount(){
		this.props.checkLogin();
	}

	render(){
		const {app_started, authenticated} = this.props.authState
		return app_started? this._renderAppRoot(authenticated) : this._renderSplash();
	}

	_renderAppRoot(authenticated){
		const CreateRoot = AppNavigation(authenticated);
		return <CreateRoot />
	}

	_renderSplash(){
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator size='large'/>
				<Text>Alou</Text>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		async checkLogin(){
			try {
				const isLogin = await AsyncStorage.getItem('authenticated')
				if(isLogin){
					dispatch(Login_success())
				}
				dispatch(App_loaded())
			}catch(e){
				console.log(e)
			}
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		authState: state.authState,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot)