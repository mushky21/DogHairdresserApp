import React from 'react';
import { enviroment } from '../../env'

const HaircutTurns = ({ turns, deleteTurn, editTurn, showPopup }) => {
    const authenticatedUser = enviroment.userId;


    const turnList = turns.length ? (
        turns.map(turn => {
            const isEnabled = turn.userId == authenticatedUser
            return (
                <tr key={turn.Id} onClick={() => { showPopup(turn) }}>
                    <td>{turn.firstName}</td>
                    <td>{turn.arrivalDate}</td>
                    <td>
                        <button disabled={!isEnabled} onClick={(e) => { deleteTurn(turn.id, e) }} id="deleteBtn"
                            className="btn-floating btn-small right red">
                            <i className="material-icons">delete</i>
                        </button>
                        <button disabled={!isEnabled} onClick={(e) => { editTurn(turn, e) }} id="editBtn"
                            className="btn-floating btn-small right red">
                            <i className="material-icons">edit</i>
                        </button>
                    </td>
                </tr>
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