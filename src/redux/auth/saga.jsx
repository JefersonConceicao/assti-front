import toast from 'react-hot-toast';
import { put, call, takeEvery, takeLatest, all } from 'redux-saga/effects';
import api from '../../api';

import { REQUEST_LOGIN } from '../actionTypes';
import { Login } from '../actions';

function* requestLogin({payload, redirectHome}){
    try{
        const { data } = yield call(apiLoginRequest, payload);

        if(!!data.access_token){
            localStorage.setItem("userToken", data.access_token); 
            yield put(Login(data.dataUser)) 

            redirectHome();
        }else{
            toast.error("Não foi possível efetuar o login");
            yield put(Login());
        }
    }catch(error){
        yield put(Login())
    }
}   

const apiLoginRequest = async payload => {
    return await api.post('/api/auth/login', payload);
}

function* watchRequestLogin(){
    yield takeLatest(REQUEST_LOGIN, requestLogin);
}

export default function* rootSaga(){
    yield all([
        watchRequestLogin(),
    ]);
}




