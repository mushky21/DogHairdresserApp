const axios = require('axios');
const baseUrl = "https://localhost:44361/api/users/"

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
    /* .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); */
    return res.data;
}

/* export const LoginUser = (username, password) => {
    axios.get(`${baseUrl}login?username=${username}&password=${password}`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
} */