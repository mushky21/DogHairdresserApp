/* import React, { Component } from 'react';
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
      
    }

    componentDidMount() {
 
        GetTurns().then(turns => {
             this.setState({
                allHaircutTurns: turns,
                filteredTurns: turns
            }) 

        })
  
    }

    //filter the list of turns (instead of calling server again and get turns - 
    //filter all turns here by saving the original list of turns)
    filterTurns = (date, firstName) => {
        const dateOfFilter = moment(date).format("YYYY/MM/DD")
        const filteredTurns = this.state.allHaircutTurns.filter(turn => {
            const arrivalDate =date? moment(turn.arrivalDate).format("YYYY/MM/DD"):null
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
                    return turn.id !== turnId
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

export default HaircutQueue; */






































import React, { Component } from 'react';
import HaircutTurns from './HaircutTurns';
import { enviroment } from '../../env'
import TurnsFilter from './TurnsFilter';
import PropTypes from 'prop-types';
import { DeleteTurn } from '../../api/turn-service'
import { GetTurns } from '../../actions/turnActions'
import { connect } from 'react-redux';
var moment = require('moment');



class HaircutQueue extends Component {

    state = {
        authenticatedUser: enviroment.userId
    }

    constructor(props) {
        super(props);

    }
    static propTypes = {
        turns: PropTypes.array.isRequired,
        GetTurns: PropTypes.func.isRequired
    }

    componentDidMount() {
        /*  this.props.GetTurns();  */


        /* GetTurns().then(turns => {
            this.setState({
                allHaircutTurns: turns,
                turns: turns
            })

        }) */
    }



    //filter the list of turns (instead of calling server again and get turns - 
    //filter all turns here by saving the original list of turns)
    filterTurns = (date, firstName) => {
        const dateOfFilter = moment(date).format("YYYY/MM/DD")
        const turns = this.props.turns.filter(turn => {
            const arrivalDate = date ? moment(turn.arrivalDate).format("YYYY/MM/DD") : null
            return (dateOfFilter == arrivalDate || !date)
                && (firstName == turn.firstName || !firstName)
        })

        this.setState({
            turns
        })
    }

    clearFilter = () => {
        this.setState({
            turns: this.props.turns
        })
    }


 /*    deleteTurn = (turnId, e) => {
        e.stopPropagation();
        //delete turn from api
        //delete turn from state
        DeleteTurn(turnId).then(data => {
            if (data.successMsg) {
                const turns = this.props.turns.filter(turn => {
                    return turn.Id !== turnId
                });
                this.setState({
                    turns
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

    } */

    navigateToEditTurn = (turnId, arrivalDate, e) => {
        e.stopPropagation();
        this.props.history.push("/editTurn", { turnId: turnId, arrivalDate: arrivalDate });
    }



    navigateToAddTurn = () => {
        this.props.history.push("/addTurn");
    }

    /*     selectOption = (selectedOption) => {
            this.setState(
                selectedOption
            )
        } */

    logout = () => {
        enviroment.userId = ''
        this.props.history.goBack();
    }

    /*     turns={this.props.turns} */

    render() {
        return (
            <div className="container">
                <h1>Haircut Queue</h1>
                <TurnsFilter></TurnsFilter>
                <HaircutTurns deleteTurn={this.deleteTurn} toEditTurn={this.navigateToEditTurn}></HaircutTurns>
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


 const mapStateToProps = state => ({
    turns: state.turns.items
}); 

export default connect(mapStateToProps,{GetTurns}) (HaircutQueue);