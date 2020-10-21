import * as types from './types';
import { enviroment } from '../env'
const axios = require('axios');
const baseUrl = `${enviroment.baseUrl}HaircutTurns/`
var moment = require('moment');

export const GetTurns = () => dispatch => {
    axios.get(`${baseUrl}getturns`).then(turns => {
        dispatch({
            type: types.Get_Turns,
            payload: turns
        });
    })
}