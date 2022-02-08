import {
    REQUEST_GET_USUARIOS,
    GET_USUARIOS
} from '../actionTypes';

const initialState = {
    loadingUsuarios: false,
}

export default function (state = initialState, action){
    switch(action.type){
        case REQUEST_GET_USUARIOS: 
            return {
                ...state,
                loading:true,
            }
        default: 
            return {...state}
    }
}