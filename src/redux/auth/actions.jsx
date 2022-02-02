import {
    REQUEST_LOGIN,
} from '../actionTypes';

export const ReqLogin = payload => ({
    type: REQUEST_LOGIN,
    payload,
});