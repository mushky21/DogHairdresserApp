import * as types from './types';
import { enviroment } from '../env'
const axios = require('axios');
const baseUrl = `${enviroment.baseUrl}HaircutTurns/`
var moment = require('moment');

export const GetTurns = () => dispatch => {
    console.log("get")
    axios.get(`${baseUrl}getturns`).then(res => {
        const turns = res.data
        dispatch({
            type: types.Get_Turns,
            payload: turns
        });
    })
}

export const DeleteTurn = (callback, turnId) => dispatch => {

    axios.get(`${baseUrl}deleteturn`, {
        params: {
            turnId: turnId
        }
    }).then(res => {
        const data = res.data
        if (data.errMsg)
            callback(data.errMsg)
        else {
            dispatch({
                type: types.Delete_Turn,
                payload: turnId
            })
        }
    })
}

export const EditHaircutTurn = (callback, turnId, arrivalDate) => dispatch => {

    arrivalDate = moment(arrivalDate).format("DD/MM/YYYY HH:mm");
    axios.post(`${baseUrl}editturn`, {
        ArrivalDate: arrivalDate,
        TurnId: turnId,

    }).then(res => {
        const data = res.data
        callback(data)

        if (data.successMsg) {
            dispatch({
                type: types.Edit_Turn,
                payload: {
                    turnId,
                    arrivalDate
                }
            })

        }

    })
}


export const AddHaircutTurn = (callback, arrivalDate, dateOfRequest) => dispatch => {
    arrivalDate = moment(arrivalDate).format("DD/MM/YYYY HH:mm");
    const userId = enviroment.userId
    dateOfRequest = moment(dateOfRequest).format("DD/MM/YYYY HH:mm");
    axios.post(`${baseUrl}addturn`, {
        userId: userId,
        arrivalDate: arrivalDate,
        dateOfRequest: dateOfRequest

    }).then(res => {
        const data = res.data
        callback(data)
        if (data.successMsg) {
            dispatch({
                type: types.Add_Turn,
                payload: {
                    dateOfRequest,
                    arrivalDate
                }
            })

        }

    })
}

export const FilterTurns = (date, firstName) => dispatch => {
    date = moment(date).format("YYYY/MM/DD")
    dispatch({
        type: types.Filter_Turns,
        payload: {
            date,
            firstName
        }
    })
}

export const ClearFilter = () => dispatch => {
    dispatch({
        type: types.Clear_Filter
    })
}

