import React, { Component } from 'react';
import HaircutTurns from './HaircutTurns';


class HaircutQueue extends Component {

    state = {
        haircutTurns: [{Id:1 ,arrivalDate:'10/10/1997', firstName:'mushky',userId:1}],
        authenticatedUser: 1

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
            return turn.id != turnId
          });
          this.setState({
            haircutTurns
          })
    }

    editTurn = (turn, e) => {
        e.stopPropagation();
        alert("edit")
    }

    render() {
        return (
            <div className="container">
            <HaircutTurns turns={this.state.haircutTurns} showPopup={this.showPopup}
            deleteTurn={this.deleteTurn} editTurn={this.editTurn}></HaircutTurns>
            </div>

        )
    }
}

export default HaircutQueue;