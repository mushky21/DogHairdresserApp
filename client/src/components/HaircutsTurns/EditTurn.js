import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import Moment from 'react-moment';


class EditTurn extends Component {
    state = {
        updatedDate: new Date(),
        turnId: this.props.location.state.turnId,
        previousDate: this.props.location.state.arrivalDate,
        errMsg: ''
    }

    constructor(props) {
        super(props)
        console.log(this.state.turnId)
    }

    handleChange = (updatedDate) => {
        this.setState({
            updatedDate
        })
    }

    //add turn only if the selected date is biggest than current date (at least ig by one minute)
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.updatedDate.getTime() > new Date().getTime()) {
            if(this.state.updatedDate!==this.state.previousDate)
            {
                this.setState({
                    errMsg: ""
                })
    
                /* this.service.editTurn(this.state.arrivalDate,this.state.turnId); */
            }
        }

        else {
            this.setState({
                errMsg: "The selected date is been over, please select again  "
            })
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h5 >Edit turn for haircut </h5>
                        <p className="error">{this.state.errMsg}</p>
                        <div>
                            <label>The current arrival date:</label>
                            <Moment format="DD/MM/YYYY HH:mm" date={this.state.previousDate} />
                        </div>
                        <label>The new arrival date:</label>
                        <DatePicker id="selectedDate" onChange={this.handleChange} selected={this.state.updatedDate} showTimeSelect
                            dateFormat="dd / MM / yyyy HH: mm" />
                    </div>
                    <div>
                        <button className="btn">Edit
                    <i className="material-icons right">add</i>
                        </button>
                    </div>

                </form>
            </div>
        )

    }
}

export default EditTurn