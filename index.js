
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import React from 'react'
import {Provider} from 'react-redux';


import {combineReducers, createStore} from 'redux';

import {authStateReducer} from './src/reducers/REDauthentication';

const reducers = combineReducers({
    authState:authStateReducer
}),

store = createStore(reducers),


appRootComponent = () => (
    <Provider store={store}> 
        <App/> 
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRootComponent);
