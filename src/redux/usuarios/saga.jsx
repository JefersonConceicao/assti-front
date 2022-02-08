import { all, takeLatest } from 'redux-saga/effects'
import {
    REQUEST_GET_USUARIOS,
    GET_USUARIOS
} from '../actionTypes'

function* sagaGetUsers({ payload }){
    console.log(payload);
}

function* watchGetUser(){
    yield takeLatest(REQUEST_GET_USUARIOS, sagaGetUsers);
}

export default function* rootSaga(){
    yield all([
        watchGetUser()
    ]);
}