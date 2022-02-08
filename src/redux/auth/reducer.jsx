import { 
    REQUEST_LOGIN,
    LOGIN,
} from '../actionTypes';

const initialState = {
    loading: false, 
    authUser: {},
}

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_LOGIN:
            return {...state, loading: true}
        case LOGIN: 
            return {
                ...state, 
                loading:false, 
                authUser: !!action.payload ? action.payload : state.authUser
            }

        default: 
            return {...state}
    }
}