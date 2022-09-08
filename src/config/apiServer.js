import axios from "axios";

const apiServer = axios.create({
    baseURL: 'http://cfd-reactjs.herokuapp.com'
})

export default apiServer