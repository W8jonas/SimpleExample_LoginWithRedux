import {LOGIN_SUCCESS} from '../actions/types'
import {LOGOUT} from '../actions/types'
import {APP_LOADED} from '../actions/types'

const initialState = {
    app_started:false,
    authenticated: false
}

export const authStateReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case LOGIN_SUCCESS:
            return {...state, authenticated: true}

        case LOGOUT:
            return {...state, authenticated: false}

        case APP_LOADED:
            return {...state, app_started: true}
        
        default:
            return state
    }
}

