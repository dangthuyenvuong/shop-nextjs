import axios from 'axios'

const authService = {
    login(data){
        return axios.post('/api/login', data)
    },
    logout() {
        return axios.get('/api/logout')
    }
}

export default authService