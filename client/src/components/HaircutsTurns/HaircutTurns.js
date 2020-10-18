import React from 'react';
import { enviroment } from '../../env'
import Moment from 'react-moment';
import Popup from 'reactjs-popup'



const HaircutTurns = ({ turns, deleteTurn, toEditTurn, showPopup }) => {
    const authenticatedUser = enviroment.userId;
    const turnList = turns.length ? (
        turns.map(turn => {
            const isEnabled = turn.userId == authenticatedUser
            return (
                <Popup classNamePerafaix="my-popup" trigger={
                    <tr key={turn.Id} onClick={() => { showPopup(turn) }}>
                        <td>{turn.firstName}</td>
                        <td>
                            <Moment format="DD/MM/YYYY HH:mm" date={turn.arrivalDate} />
                        </td>
                        <td>
                            <button disabled={!isEnabled} onClick={(e) => { deleteTurn(turn.Id, e) }} id="deleteBtn"
                                className="btn-floating btn-small right red">
                                <i className="material-icons">delete</i>
                            </button>
                            <button disabled={!isEnabled} onClick={(e) => { toEditTurn(turn.Id, turn.arrivalDate, e) }} id="editBtn"
                                className="btn-floating btn-small right red">
                                <i className="material-icons">edit</i>
                            </button>
                        </td>
                    </tr>
                } position="right center">
                    <div>
                        <div>
                            name :{turn.firstName}
                        </div>
                        <div>
                            arrival date -
                            <div>
                                <Moment format="DD/MM/YYYY HH:mm" date={turn.arrivalDate} />
                            </div>

                        </div>
                        <div>
                            date of request -
                            <div>
                                <Moment format="DD/MM/YYYY HH:mm" date={turn.dateOfRequest} />
                            </div>

                        </div>

                    </div>
                </Popup>

            )
        })

    ) : (
            <tr>
                <td>  There aren't turns for haircut</td>
            </tr>
        );
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {turnList}
            </tbody>
        </table>
    )
}

export default HaircutTurns;