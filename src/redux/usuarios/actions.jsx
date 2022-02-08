import {
    REQUEST_GET_USUARIOS,
    GET_USUARIOS
} from '../actionTypes';

export const RequestGetUsuarios = payload => ({
    type: REQUEST_GET_USUARIOS,
    payload,
})

export const GetUsuarios = payload => ({
    type: GET_USUARIOS,
    payload,
})
