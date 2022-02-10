import {
    REQUEST_GET_USUARIOS,
    GET_USUARIOS
} from '../actionTypes';

const initialState = {
    loadingUsuarios: false,
    dataUsuarios: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_GET_USUARIOS:
            return {...state, loadingUsuarios: true}
        case GET_USUARIOS:
            return {...state, loadingUsuarios: false, dataUsuarios: !!action.payload ? action.payload : state.dataUsuarios }
        default:
            return { ...state }
    }
}