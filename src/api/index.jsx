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
    if(response.data.status === "Token is Expired"){
        localStorage.removeItem("userToken");   
        window.location.href = '/'
    }

    return response;
}, function({ responseError }){
    switch(responseError.status){
        case 401:
            toast.error("Crendenciais invalidas");
        break; 
        default: 
        break;
    }
});

export default api;