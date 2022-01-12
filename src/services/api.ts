import axios from 'axios';



const api = axios.create({
    baseURL: 'https://url-decode-to-text.vercel.app:3001'
})

export default api