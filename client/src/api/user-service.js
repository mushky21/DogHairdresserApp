import { enviroment } from '../env'
const axios = require('axios');
const baseUrl = `${enviroment.baseUrl}users/`

export const SignUpUser = async (username, password, firstName) => {
    const res = await axios.post(`${baseUrl}signup`, {
        username,
        password,
        firstName
    });
    return res.data;
}

export const LoginUser = async (username, password) => {
    const res = await axios.get(`${baseUrl}login?username=${username}&password=${password}`);
    return res.data;
}
