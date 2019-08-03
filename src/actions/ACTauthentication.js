import {LOGIN_SUCCESS} from '../actions/types'
import {LOGOUT} from '../actions/types'
import {APP_LOADED} from '../actions/types'

export const Login_success = () => {
    return {
        type: LOGIN_SUCCESS,
        payload: null,
    }
}

export const Logout = () => {
    return {
        type: LOGOUT,
        payload: null,
    }
}

export const App_loaded = () => {
    return {
        type: APP_LOADED,
        payload: null,
    }
}
