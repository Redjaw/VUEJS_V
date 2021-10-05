import axios from 'axios'

axios.defaults.baseURL = '/api/auth'
axios.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = 'Bearer xxxxx.yyyyy.zzzzz'
        return config
    },
    (error) => {
        console.log("error",error)
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        console.log('response',res)
        return res
    },
    (error) => {
        if (error && error.response && error.response.status === 401) {
            alert('non autenticato, effettua nuovamente la login')
        }
        return Promise.reject(error)
    }
)

export default axios
