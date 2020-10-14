import React, { Component } from 'react';
import AddTurn from './AddTurn';
import HaircutTurns from './HaircutTurns';
import { enviroment } from '../../env'
import TurnsFilter from './TurnsFilter';
var moment = require('moment');


class HaircutQueue extends Component {

    state = {
        allHaircutTurns: [],
        filteredTurns: [],
        authenticatedUser: enviroment.userId
    }

    constructor(props) {
        super(props);
        //get pramas from navigation 
        /*         const env = this.props.location.state
                console.log(env) */


    }

    componentDidMount() {
        const haircutTurns = [{ Id: 1, arrivalDate: new Date().toString(), firstName: 'mushky', userId: 1 }]
        this.setState({
            allHaircutTurns: haircutTurns,
            filteredTurns: haircutTurns
        })
    }

    //filter the list of turns (instead of calling server again and get turns - 
    //filter all turns here by saving the original list of turns)
    filterTurns = (date, firstName) => {
        console.log(date)
        const dateOfFilter = moment(date).format("YYYY/MM/DD")
        const filteredTurns = this.state.allHaircutTurns.filter(turn => {
            const arrivalDate = moment(turn.arrivalDate).format("YYYY/MM/DD")
            return (dateOfFilter == arrivalDate || !date)
                && (firstName == turn.firstName || !firstName)
        })

        this.setState({
            filteredTurns
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
        const haircutTurns = this.state.haircutTurns.filter(turn => {
            return turn.id !== turnId
        });
        this.setState({
            haircutTurns
        })
    }

    navigateToEditTurn = (turnId, arrivalDate, e) => {
        e.stopPropagation();
        this.props.history.push("/editTurn", { turnId: turnId, arrivalDate: arrivalDate });
    }

    addTurn = (date) => {
        const dateOfRequest = new Date().toString()//send to server
        //add to db if the turn did'nt caught and get id from server and name
        const { haircutTurns } = this.state
        console.log(haircutTurns)
        haircutTurns.push({ Id: 2, arrivalDate: date.toString(), firstName: 'mushky', userId: this.state.authenticatedUser })
        this.setState({
            haircutTurns
        })
    }

    selectOption = (selectedOption) => {
        this.setState(
            selectedOption
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Haircut Queue</h1>
                <TurnsFilter filterTurns={this.filterTurns}></TurnsFilter>

                {/*                 <div className="select-border">
                    <Select placeholder="select filter" classNamePrefix="filter"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.optionsOfFilter}
                    />
                </div> */}
                <HaircutTurns turns={this.state.filteredTurns} showPopup={this.showPopup}
                    deleteTurn={this.deleteTurn} addTurn={this.addTurn} toEditTurn={this.navigateToEditTurn}></HaircutTurns>
                <div>
                    <AddTurn addTurn={this.addTurn}></AddTurn>
                </div>
            </div>

        )
    }
}

export default HaircutQueue;