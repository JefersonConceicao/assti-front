import { 
    REQUEST_LOGIN
} from '../actionTypes';

const initialState = {
    loading: false, 
}

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_LOGIN:
            return {...state, loading: true}
        default: 
            return {...state}
    }
}