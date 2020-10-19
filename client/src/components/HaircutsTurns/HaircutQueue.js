import React, { Component } from 'react';
import AddTurn from './AddTurn';
import HaircutTurns from './HaircutTurns';
import { enviroment } from '../../env'
import TurnsFilter from './TurnsFilter';
import { GetTurns, DeleteTurn } from '../../api/turn-service'

var moment = require('moment');



class HaircutQueue extends Component {

    state = {
        allHaircutTurns: [],
        filteredTurns: [],
        authenticatedUser: enviroment.userId
    }

    constructor(props) {
        super(props);
        GetTurns().then(turns => {
            console.log(enviroment.userId)
            console.log(turns[0])
             this.setState({
                allHaircutTurns: turns,
                filteredTurns: turns
            }) 

        })
    }

    componentDidMount() {
 
  
  
    }

    //filter the list of turns (instead of calling server again and get turns - 
    //filter all turns here by saving the original list of turns)
    filterTurns = (date, firstName) => {
        const dateOfFilter = moment(date).format("YYYY/MM/DD")
        const filteredTurns = this.state.allHaircutTurns.filter(turn => {
            const arrivalDate =date? moment(turn.arrivalDate).format("YYYY/MM/DD"):null
            console.log(turn)
            return (dateOfFilter == arrivalDate || !date)
                && (firstName == turn.firstName || !firstName)
        })

        this.setState({
            filteredTurns
        })
    }

    clearFilter = () => {
        this.setState({
            filteredTurns: this.state.allHaircutTurns
        })
    }

    //show popup when user clicked on row 
    showPopup = (turn) => {
        alert(turn.arrivalDate)
    }

    deleteTurn = (turnId, e) => {
        e.stopPropagation();
        //delete turn from api 
        //delete turn from state
        DeleteTurn(turnId).then(data => {
            if (data.successMsg) {
                const filteredTurns = this.state.filteredTurns.filter(turn => {
                    return turn.Id !== turnId
                });
                this.setState({
                    filteredTurns
                })
                this.setState({
                    errMsg: data.successMsg
                })
            }
            else {
                this.setState({
                    errMsg: data.errMsg
                })

            }
        })
       
    }

    navigateToEditTurn = (turnId, arrivalDate, e) => {
        e.stopPropagation();
        this.props.history.push("/editTurn", { turnId: turnId, arrivalDate: arrivalDate });
    }



    navigateToAddTurn = () => {
        this.props.history.push("/addTurn");
    }

    selectOption = (selectedOption) => {
        this.setState(
            selectedOption
        )
    }

    logout = () => {
        enviroment.userId = ''
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="container">
                <h1>Haircut Queue</h1>
                <TurnsFilter clearFilter={this.clearFilter} filterTurns={this.filterTurns}></TurnsFilter>
                <HaircutTurns turns={this.state.filteredTurns} showPopup={this.showPopup}
                    deleteTurn={this.deleteTurn} addTurn={this.addTurn} toEditTurn={this.navigateToEditTurn}></HaircutTurns>
                <div>
                    <button onClick={this.navigateToAddTurn} className="btn">
                        To Add Turn
                </button>
                </div>
                <div>
                    <button onClick={this.logout} className="btn">Logout
                    </button>
                </div>
            </div>

        )
    }
}

export default HaircutQueue;