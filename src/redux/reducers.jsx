import { combineReducers } from 'redux'

import Customizer from './customizer/reducer'
import Auth from './auth/reducer'
import Usuarios from './usuarios/reducer';

const reducers = combineReducers({
    Customizer,
    Auth,
});

export default reducers;