import axios from 'axios'

const userService = {
    getUser(){
        return axios.get('/api/user')
    }
}

export default userService