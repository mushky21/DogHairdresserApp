import {enviroment} from '../env'
const axios = require('axios');
const baseUrl = `${enviroment.baseUrl}users/`

export const LoginUser = async (username, password) => {
    const response = await axios.get(`${baseUrl}login`, {
        params: {
            username: username,
            password: password
        }
    })
    return response.data
}

export const SignUpUser = async (username, password, firstName) => {
    const res = await axios.post(`${baseUrl}signup`, {
        username: username,
        password: password,
        firstName: firstName
    })
    return res.data;
}
