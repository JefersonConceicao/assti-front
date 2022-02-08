import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

let barearToken = !!localStorage.getItem('userToken') ? localStorage.getItem('userToken') : ""
if(!!barearToken){
    api.defaults.headers.common = {'Authorization': `Bearer ${barearToken}`}
}

api.interceptors.response.use(function(response){
    return response;
}, function({response}){
    switch(response.status){
        case 401:
            toast.error("Crendenciais invalidas");
        break; 
        default: 
        break;
    }
});

export default api;