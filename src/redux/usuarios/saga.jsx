import { all, call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_GET_USUARIOS, GET_USUARIOS } from '../actionTypes'
import { GetUsuarios } from '../actions';
import api from '../../api';

function* sagaGetUsers({ payload }){
    const { data } = yield call(apiGetUsuarios, payload);
    yield put(GetUsuarios(data.data));
}

const apiGetUsuarios = async (payload) => {
    const response = await api.get('/api/users', {params: payload });
    return response;
}

function* watchGetUser(){
    yield takeLatest(REQUEST_GET_USUARIOS, sagaGetUsers);
}

export default function* rootSaga(){
    yield all([
        watchGetUser()
    ]);
}