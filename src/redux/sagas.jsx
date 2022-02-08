import { all, fork } from 'redux-saga/effects';
import Auth from './auth/saga'
import Usuarios from './auth/saga'

export default function* rootSaga(){
    yield all([
        fork(Auth)
        fork(Usuarios)
    ])
}