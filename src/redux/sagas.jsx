import { all, fork } from 'redux-saga/effects';
import Auth from './auth/saga'

export default function* rootSaga(){
    yield all([
        fork(Auth)
    ])
}