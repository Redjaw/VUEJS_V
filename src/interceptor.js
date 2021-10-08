import axios from 'axios'

axios.defaults.baseURL = 'api/'

axios.interceptors.response.use(
    (res) => {
        return res
    },
    function(error) {
        if (error.response.status) {
           console.log()
        }
        return Promise.reject(error)
    }
)

export default axios