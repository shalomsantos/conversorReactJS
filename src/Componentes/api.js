import axios from 'axios';

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=y&apiKey=73e43e17bcc1d6657bf6'
})

export default api;