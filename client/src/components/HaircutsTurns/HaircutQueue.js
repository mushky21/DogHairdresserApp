import React, { Component } from 'react';
import AddTurn from './AddTurn';
import HaircutTurns from './HaircutTurns';
import {enviroment} from '../../env'


class HaircutQueue extends Component {

    state = {
        haircutTurns: [{Id:1 ,arrivalDate:'10/10/1997', firstName:'mushky',userId:1}],
        authenticatedUser: enviroment.userId

    }
    constructor(props) {
        super(props);
        //get pramas from navigation 
        /*         const env = this.props.location.state
                console.log(env) */


    }

    //show popup when user clicked on row 
    showPopup = (turn) => {
        alert(turn.arrivalDate)
    }

    deleteTurn = (turnId,e) => {
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

    editTurn = (turn, e) => {
        e.stopPropagation();
        alert("edit")
    }

    addTurn = (date) => {
        //add to db if the turn did'nt caught and get id from server and name
        this.state.push({Id:1 ,arrivalDate:date, firstName:'mushky',userId:this.state.authenticatedUser})
    }

    render() {
        return (
            <div className="container">
            <AddTurn></AddTurn>
            <HaircutTurns turns={this.state.haircutTurns} showPopup={this.showPopup}
            deleteTurn={this.deleteTurn} addTurn={this.addTurn} editTurn={this.editTurn}></HaircutTurns>
            </div>

        )
    }
}

export default HaircutQueue;