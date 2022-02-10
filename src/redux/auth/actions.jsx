import {
    REQUEST_LOGIN,
    LOGIN,
    REQUEST_LOGOUT
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

export const Logout = payload => ({
    type: REQUEST_LOGOUT,
    payload,
});