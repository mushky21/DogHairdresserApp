import { enviroment } from '../env'
const axios = require('axios');
const baseUrl = `${enviroment.baseUrl}HaircutTurns/`
var moment = require('moment');


export const GetTurns = async () => {
    const response = await axios.get(`${baseUrl}getturns`)
    return response.data
}

export const DeleteTurn = async (turnId) => {
    const res = await axios.get(`${baseUrl}deleteturn`, {
        params: {
            turnId: turnId
        }
    })
    return res.data;
}

export const AddHaircutTurn = async (arrivalDate, dateOfRequest) => {
    arrivalDate =  moment(arrivalDate).format("DD/MM/YYYY HH:mm");
    const userId =  localStorage.getItem('userID');
    dateOfRequest =  moment(dateOfRequest).format("DD/MM/YYYY HH:mm");
    const res = await axios.post(`${baseUrl}addturn`, {
        userId: userId,
        arrivalDate:arrivalDate /* moment(arrivalDate).format("DD/MM/YYYY HH:mm") */,
        dateOfRequest:dateOfRequest/*  moment(dateOfRequest).format("DD/MM/YYYY HH:mm") */
    })
    return res.data;
}


export const EditHaircutTurn = async (turnId, arrivalDate) => {
    arrivalDate = moment(arrivalDate).format("DD/MM/YYYY HH:mm");
    const res = await axios.post(`${baseUrl}editturn`, {
        ArrivalDate: arrivalDate,
        TurnId: turnId,

    })
    return res.data;
}
