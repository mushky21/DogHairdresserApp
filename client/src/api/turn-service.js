import {enviroment} from '../env'
const axios = require('axios');
const baseUrl = "https://localhost:44361/api/HaircutTurns/"

 
export const GetTurns = async () => {
    const response = await axios.get(`${baseUrl}getturns`)
    return response.data
}

export const DeleteTurn = async (turnId) => {
    const res = await axios.get(`${baseUrl}deleteturn`, { params: {
       turnId:turnId
    }})
    return res.data;
}

export const AddHaircutTurn = async (arrivalDate, dateOfRequest) => {
    const res = await axios.post(`${baseUrl}addturn`, {
        userId: enviroment.userId,
        arrivalDate: arrivalDate,
        dateOfRequest: dateOfRequest
    })
    return res.data;
}


export const EditHaircutTurn = async (turnId, arrivalDate) => {
    const res = await axios.post(`${baseUrl}editturn`, {
        ArrivalDate:arrivalDate,
        TurnId: turnId,

    })
    return res.data;
}
