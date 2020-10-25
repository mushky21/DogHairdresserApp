import React, { Component } from 'react';
import Moment from 'react-moment';
import Popup from 'reactjs-popup'
import { GetTurns, DeleteTurn } from '../../actions/turnActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { enviroment } from '../../env'


class HaircutTurns extends Component {
    state = {
        errMsg: ""
    }

    componentDidMount() {
        this.props.GetTurns()
    }


    deleteTurn = (turnId, e) => {
        e.stopPropagation();
        this.props.DeleteTurn((errMsg) => {
            if (errMsg) {
                this.setState({
                    errMsg
                })
            }
        }, turnId)

    }

    render() {
        const userId = enviroment.userId;
        const { turns } = this.props;

        const turnList = turns.length ? (
            turns.map(turn => {
                const isEnabled = turn.userId == userId
                return (
                    <Popup key={turn.Id} classNamePerafaix="my-popup" trigger={
                        <tr key={turn.Id} >
                            <td>{turn.firstName}</td>
                            <td>
                                <Moment format="DD/MM/YYYY HH:mm" date={turn.arrivalDate} />
                            </td>
                            <td>
                                <button disabled={!isEnabled} onClick={(e) => { this.deleteTurn(turn.id, e) }} id="deleteBtn"
                                    className="btn-floating btn-small right red">
                                    <i className="material-icons">delete</i>
                                </button>
                                <button disabled={!isEnabled} onClick={(e) => { this.props.toEditTurn(turn.id, turn.arrivalDate, e) }} id="editBtn"
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
            <div>
                <p className="error">{this.state.errMsg}</p>
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

            </div>

        )
    }


}
HaircutTurns.propTypes = {
    turns: PropTypes.array.isRequired,
    GetTurns: PropTypes.func.isRequired,
    DeleteTurn: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    turns: state.turns.items
});

export default connect(mapStateToProps, { GetTurns, DeleteTurn })(HaircutTurns);
/* const HaircutTurns = (props) => {
    const userId = enviroment.userId;
    const {turns} = props;
    const turnList = turns.length ? (
        turns.map(turn => {
            const isEnabled = turn.userId == userId
            return (
                <Popup key={turn.Id} classNamePerafaix="my-popup" trigger={
                    <tr key={turn.Id} onClick={() => { props.showPopup(turn) }}>
                        <td>{turn.firstName}</td>
                        <td>
                            <Moment format="DD/MM/YYYY HH:mm" date={turn.arrivalDate} />
                        </td>
                        <td>
                            <button disabled={!isEnabled} onClick={(e) => { props.deleteTurn(turn.id, e) }} id="deleteBtn"
                                className="btn-floating btn-small right red">
                                <i className="material-icons">delete</i>
                            </button>
                            <button disabled={!isEnabled} onClick={(e) => { props.toEditTurn(turn.id, turn.arrivalDate, e) }} id="editBtn"
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
} */

