import {
    REQUEST_LOGIN,
    LOGIN,
} from '../actionTypes';

export const ReqLogin = (payload, redirectHome) => ({
    type: REQUEST_LOGIN,
    payload,
    redirectHome,
});

export const Login = payload => ({
    type: LOGIN,
    payload,
});