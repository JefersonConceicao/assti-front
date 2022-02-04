import { put, call, takeEvery, takeLatest, all } from 'redux-saga/effects';
import api from '../../api';

import { 
    REQUEST_LOGIN
} from '../actionTypes';

function* requestLogin({payload}){
    try{
        const { data } = yield call(apiLoginRequest, payload);
        console.log(data);
        if(!!data.token){
            localStorage.setItem("userToken", data.token);
        }else{

        }
    }catch(error){

    }
}   

const apiLoginRequest = async payload => {
    return await api.post('/api/login', payload);
}

function* watchRequestLogin(){
    yield takeLatest(REQUEST_LOGIN, requestLogin);
}

export default function* rootSaga(){
    yield all([
        watchRequestLogin(),
    ]);
}




