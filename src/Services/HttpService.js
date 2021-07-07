import axios from 'axios'

class HttpService {
    constructor(){
        
    }

    get(url,config=null){
        return axios.get(url,config)
    }

    post(url,data,config=null){
        return axios.post(url,data,config)
    }
}

export default HttpService;