import axios from 'axios';



const api = axios.create({
    baseURL: 'https://backend-decode-url.vercel.app:3001'
})

export default api