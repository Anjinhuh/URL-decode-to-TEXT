import axios from 'axios';



const api = axios.create({
    baseURL: 'https://backend-decode-url.herokuapp.com'
})

export default api